package pourColorier;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Iterator;
import java.util.List;

import aColorier.Mot;




public class Phonetique {

	private Connection connect = null;
	private Statement statement = null;
	private PreparedStatement preparedStatement = null;
	private ResultSet resultSet = null;
	private String nomDuServer;
	private String nomDeLaBase;
	private String nomDeLaTableInflection;
	private String nomDeLaTableLemma;	
	private String nomUtiliEtPass;
	private String sql ;
	
	


	public Phonetique(
			String nomDuServer,
			String nomDeLaBase,
			String nomUtiliEtPass,
			String nomDeLaTableInflection,
			String nomDeLaTableLemma){
	
		/*
		 * jdbc:mysql://localhost:3306/rspsman_highscores
		String nomDeLaBase = "localhost:3306/cestvert_morphalouNouv?";
		String nomUtiliEtPass = "user=cestvert_morpha&password=Severe77";
		 maison 3306
		String nomDeLaBase = "localhost/morphalounouv?";
		String nomUtiliEtPass = "user=root&password=Severe77";
		
		Class.forName("com.mysql.jdbc.Driver").newInstance();
		connection = DriverManager.getConnection("jdbc:mysql://localhost/<DATABASE NAME>?user=<USERNAME>&password=<PASSWORD>");
		Statement sql = connection.createStatement();
		ResultSet result = sql.executeQuery("SELECT field FROM table");
			*/
		//variables pour la base de donnée
		this.nomDuServer = nomDuServer;
		this.nomDeLaBase = nomDeLaBase;
		this.nomDeLaTableInflection = nomDeLaTableInflection;
		this.nomDeLaTableLemma = nomDeLaTableLemma;		
		this.nomUtiliEtPass = nomUtiliEtPass;


	}

	public void chercher(
		List<Mot> listeDeMotsEtSeparateursDuText,
		SocupePasAdequationMorphalou ocupePasAdequationMorphalou,
		List<String> listeMessages ) throws Exception{
		
		  Iterator<Mot> iterlisteDeMotsEtSeparateursDuText= listeDeMotsEtSeparateursDuText.iterator();
		  Mot unMot;
		  try{
		  	creationConnectionBD(listeMessages);
		  	//statement permet d'effectuer une requête sur la base de données
			statement = connect.createStatement();
		  
		  	//on boucle sur coupleMotEtseparateurDeMot
		 	while(iterlisteDeMotsEtSeparateursDuText.hasNext()){
		 		
			  unMot = iterlisteDeMotsEtSeparateursDuText.next();
			  
			  // si c'est pas un mot on continue c'est-à-dire que l'on saute jusqu'au prochain mot 
			  if ( ! unMot.getEstCeUnMot()){
				  continue;
			  }

				// Result set get the result of the SQL query
				sql = "SELECT phonetic1 FROM " + nomDeLaBase + "." + nomDeLaTableInflection + " WHERE content = '" + 
						unMot.getOrthographeMot().toLowerCase().replace("'", "\\\'")	+ "' " +
						"ORDER BY homographeChoisi DESC ";
				
				resultSet = statement.executeQuery(sql );
				
				//le sésultat d'Inflexion 
				if (resultSet.next()){
					unMot.setPhonetiqueSAMPA( resultSet.getString("phonetic1") ); 	
	
				}else{
					//requête sur lemma
					sql = "SELECT phonetic1 FROM " + nomDeLaBase + "." + nomDeLaTableLemma + " WHERE content = '" + 
							unMot.getOrthographeMot().toLowerCase().replace("'", "\\\'")	+ "' " ;
					
					resultSet.close();
					resultSet = statement.executeQuery(sql );
					
					//le sésultat de lemma
					if (resultSet.next()){
						unMot.setPhonetiqueSAMPA( resultSet.getString("phonetic1") ); 	
		
					}else{
					
					// la phonetique n'existe pas dans le morphalou
					unMot.setPhonetiqueSAMPA("");
					listeMessages.add("La phonetique de " + unMot.getOrthographeMot() + " n'existe pas.");
					unMot.setOrthographeMot(unMot.getOrthographeMot());
					unMot.setEstCeUnMot(false);
					}
				}
				resultSet.close();

		 	}
		 	statement.close();
		 	
			}catch(ClassNotFoundException exClassNotFound){
				listeMessages.add(" erreur creation connection  BD: " + exClassNotFound.toString() );
			}catch (SQLException exSQLException){
				listeMessages.add(" erreur creation connection  BD: " + exSQLException.toString() );
			}catch (Exception exException){
				listeMessages.add(" erreur dans la requête : " + exException.toString() );
			}		

			 finally{
			     if(statement!=null)try{statement.close();}catch(Exception e){listeMessages.add(e.toString());}				 
			     if(connect!=null)try{connect.close();}catch(Exception e){listeMessages.add(e.toString());}     
			  }
	}
	
	private void creationConnectionBD(List<String> listeMessages) throws ClassNotFoundException , SQLException{
		
			if ((connect == null) ||  !connect.isValid(0) ){
				connect = null;	
				// This will load the MySQL driver, each DB has its own driver
				Class.forName("com.mysql.jdbc.Driver");
				// Setup the connection with the DB ://localhost:3306
				connect = DriverManager.getConnection("jdbc:mysql://"+ nomDuServer + nomDeLaBase +"?"
						+ nomUtiliEtPass);
			}

	}
}

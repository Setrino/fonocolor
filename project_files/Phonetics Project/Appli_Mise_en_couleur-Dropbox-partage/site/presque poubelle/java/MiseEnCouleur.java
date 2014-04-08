package pourColorier;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


import org.simpleframework.xml.core.PersistenceException;

import exception.PhonemeSAMPADeMorphalouExistePasRelation;
import exception.PhonemeSAMPADeRelationExistePasDsListePhonemeSAMPA;




import aColorier.Mot;
import aColorier.PhonemeGraphemeCouleur;



/**
 * Variables qui contiendra les diferentes donnees pour mettre en couleur les mots
 * 
 */

public class MiseEnCouleur {
	
	
	//gere les parametres d'application
	GestionParametresApplication gestionParametresApplication;
	//gere les inadequations de morphalou
	SocupePasAdequationMorphalou sOcupePasAdequationMorphalou;
	//gere les regle de sampa à sampa
	GestionReglesSAMPAaSAMPA gestionReglesSAMPAaSAMPA; 
	//gere les sampa graphemes
	GestionSAMPAGraphemes gestionSAMPAGraphemes;
	//gere les relations entre sampa
	GestionRelationEntreSampa gestionRelationEntreSampa;
	//gere les sampa simplifie avec les graphemes et couleurs
	SAMPASimplifiesGraphemesCouleurs sAMPASimplifiesGraphemesCouleurs;
	
	//gere la phonetique
	Phonetique phonetique;
 


	public MiseEnCouleur(String pathFichierXML, String nomFichierParametrage, String nomDuServer, String nomDeLaBase, 
			String nomDeLaTableInflection, String nomDeLaTableLemma, String nomUtiliEtPass, List<String>  listeErreurs){


		//on charge les parametres de l'application
		try{
			gestionParametresApplication = new GestionParametresApplication(pathFichierXML + nomFichierParametrage);
			
		}catch(PersistenceException persExc){
			listeErreurs.add(persExc.getMessage());
			return;
		}
		catch(java.lang.Exception langExcep){
			listeErreurs.add("Le chargement du fichier ParametresApplication.xml n'a pas pu être effectue" +
					"\r\n" + langExcep.getMessage());
			return;
		}
		
		
		// on charge la liste des ReglesMorphalouPasAdequation
		try{
			sOcupePasAdequationMorphalou = new SocupePasAdequationMorphalou(
					pathFichierXML + gestionParametresApplication.getNomFichierReglesMorphalouPasAdequation());
		}catch (Exception excep){
			listeErreurs.add("Le chargement des regles de pas " + "adequation morphalou c'est mal passe: " 
					+ excep.getMessage());
			return;
			
		}
		
		//on definit un objet qui occupes des regles SAMPA à SAMPA
		
		try{
			gestionReglesSAMPAaSAMPA = new GestionReglesSAMPAaSAMPA(
					pathFichierXML + gestionParametresApplication.getNomFichierReglesDeSAMPAaSAMPA());
			
		}catch(PersistenceException persExc){
			listeErreurs.add(persExc.getMessage());
			return;
		}
		catch(java.lang.Exception langExcep){
			listeErreurs.add("Le chargement du fichier ReglesDeSAMPAaSAMPA n'a pas pu être effectue" +"\r\n" 
					+ langExcep.getMessage());
			return;
		}

		// la variable contenant les donnees des phonemes avec les graphemes correspondant
		try{
			gestionSAMPAGraphemes = new GestionSAMPAGraphemes(
					pathFichierXML + gestionParametresApplication.getNomFichierSAMPAGraphemes());
			
		}catch(PersistenceException persExc){
			listeErreurs.add(persExc.getMessage());
			return;
		}
		catch(java.lang.Exception langExcep){
			listeErreurs.add("Le chargement du fichier des phonemes SAMPA avec les graphemes n'a pas pu être effectue" +
					"\r\n" + langExcep.getMessage());
			return;
		}
		
		// Chargement des relation SAMPA simplifie et SAMPA		
		try{
			gestionRelationEntreSampa = new GestionRelationEntreSampa(
					pathFichierXML + gestionParametresApplication.getNomFichierRelation());
			
		}catch(PersistenceException persExc){
			listeErreurs.add(persExc.getMessage());
			return;
		}		
		catch(Exception langExcep){
			listeErreurs.add("Le chargement du fichier relation n'a pas pu être effectue \r\n" + langExcep.getMessage());
			return;
		};
		
		
		//on cree l'instance de phonemesSAMPASimplifiesGraphemes (sAMPASimplifiesGraphemesCouleurs)
		try {			
			 sAMPASimplifiesGraphemesCouleurs = new SAMPASimplifiesGraphemesCouleurs(
					gestionRelationEntreSampa.getRelationsSAMPASimplifiesEtSAMPAs(),
					gestionSAMPAGraphemes.getPhonemesGraphemes());
		}catch(PhonemeSAMPADeRelationExistePasDsListePhonemeSAMPA excep){
			listeErreurs.add(excep.getMessage());
			return;
		}


		//initialise pour questionner morphalou 2
		try {
			phonetique = new Phonetique(
					nomDuServer,
					nomDeLaBase, 
					nomUtiliEtPass,
					nomDeLaTableInflection,
					nomDeLaTableLemma);			
		}catch(Exception exc){
			listeErreurs.add("Il n'a pas ete possible de se connecter  à la base de donnee \r\n " + exc.getMessage());
    		return;
		}	
		
	}
	
	/*
	 * On remplit l'objet Mot orthographe, phonetique SAMPA, phonetique SAMPA simplifie,
	 * trouver les couleurs pour les differents graphemes et chosir une coloration
	 */
	public void phonetisationSampaSimplifie(
    		String textIntroduit, 
    		List<Mot> listeDeMotsEtSeparateursDuText,
    		List<String> listeErreurs){
		
		//decoupe les mots
		decoupeDuTextEnMotEtSeparateur(textIntroduit,listeDeMotsEtSeparateursDuText);
		
		
		try {
			phonetique.chercher( 
					listeDeMotsEtSeparateursDuText, 
					sOcupePasAdequationMorphalou,
					listeErreurs);				
		}catch(Exception exc){
			listeErreurs.add("Les problemes suivants sont apparus \r\n " + exc.getMessage());
    		return;
		}	
		
		// transformer une Phonetique SAMPA en SAMPA
		try{
			gestionReglesSAMPAaSAMPA.transformerDeSAMPAaSAMPA
					(listeDeMotsEtSeparateursDuText, listeErreurs);
		}catch(Exception excep){
			listeErreurs.add(excep.getMessage());
    		return;
		}
		
		// transformer une Phonetique SAMPA en simplifie
		try{
			gestionRelationEntreSampa.transforme(listeDeMotsEtSeparateursDuText, listeErreurs);		
			
		}catch(PhonemeSAMPADeMorphalouExistePasRelation excep){
			listeErreurs.add(excep.getMessage());
    		return;
		}
		
		
		try{			
			sAMPASimplifiesGraphemesCouleurs.mettreEnCouleurLesMots(listeDeMotsEtSeparateursDuText, listeErreurs);
		}catch(Exception excep){
			listeErreurs.add("Il y a un probleme lors mise en couleur des mots \r\n" + excep.getMessage());
    		return;
		}
	
	}
	
	/*
	 * creation du fichier html avec le css à l'interieur
	 * 
	 */
	public void phonetisationSSimplifieFichierHTML(
	   		String textIntroduit, 
    		StringBuffer reponse,
    		List<String> listeErreurs){
		
		List<Mot> listeDeMotsEtSeparateursDuText = new ArrayList<Mot>();;
		
		phonetisationSampaSimplifie(textIntroduit,listeDeMotsEtSeparateursDuText,listeErreurs);
		
		 // TODO  Il y a lieu d'avoir une séparation entre le code pour l'HTML et celui pour le css
		creationFichierHTML(reponse,
				sAMPASimplifiesGraphemesCouleurs.getDictClefCouleurValeurNomCouleur(),
				listeDeMotsEtSeparateursDuText);
		
	}
	/*
	 * creation seulement des block1
	 */

	public void phonetisationSSimplifieReponseEnBlocEtCSS(
	   		String textIntroduit, 
    		StringBuffer reponse,
    		StringBuffer partieCSS,
    		List<String> listeErreurs){
	try {	
		List<Mot> listeDeMotsEtSeparateursDuText = new ArrayList<Mot>();;
		//on cree les objets MOt et remplit
		phonetisationSampaSimplifie(textIntroduit,listeDeMotsEtSeparateursDuText,listeErreurs);
		//on ecrit les blocks
		reponseBlocEtCSS(
				reponse,
				partieCSS,
				sAMPASimplifiesGraphemesCouleurs.getDictClefCouleurValeurNomCouleur(),
				listeDeMotsEtSeparateursDuText);
	}catch ( Exception exc){
		listeErreurs.add(exc.toString());
	}
		
	}
    private void decoupeDuTextEnMotEtSeparateur(
    		String textIntroduit, 
    		List<Mot> listeDeMotsEtSeparateursDuText ){
		// coupe la chaine de caracteres en ligne (retour de chariot) 
		// ensuite on a des chaines de caracteres (mot) [ espace Caracteres[i] (mot)]
		// Il faut rechercher les mots dans la ligne. Tous les mots sont soit suivis d'un espace où que leur dernier caractere
		// est un ' ou que l'on se trouve à la fin d'une ligne
		// Dans le cas où le dernier caractere est une ' on doit l'inclure dans le mot donc on coupe un caratere de plus
		// qui est fait avec le variable ajoutPourPrendreLApostrophe

		//on remplace les apostrophe arrondi ’ (word) par '
		java.util.StringTokenizer tokenizer = new java.util.StringTokenizer(textIntroduit.replaceAll("’", "'"), "\r\n");
		String chaineDeCarcateres = "";
		String ligneDeMots;
		String motifSeparateurMot = "[\\\" ’`´()  ;\\!/,-.:?' \\n\\r\\f\\t]"; //on definit un motif
		String motifSeparateurMotSansApostrophe = "[\\\" `´()  ;\\!/,-.:? \\n\\r\\f\\t]"; //on definit un motif
		Pattern patternSeparteurMot = Pattern.compile(motifSeparateurMot);//on definit un pattern
		Pattern patternSeparteurMotSansApostrophe = Pattern.compile(motifSeparateurMotSansApostrophe);//on definit un pattern
		Matcher matcherSeparateurMot;  // on definit une matcher pour trouver les separteurs de mots
		Matcher matcherSiSeparateurDeMotSansApostrophe;  // on definit une matcher pour trouver si la chaine de caractere est separateur de mot

		
		//On cree un UneTranscriptionEnCouleurUnMot de fin de ligne 
		Mot uneTranscriptionFinDeLigne = new Mot();
		uneTranscriptionFinDeLigne.setEstCeUnMot(false);
		uneTranscriptionFinDeLigne.setOrthographeMot("<br>\r\n");
		//le mot et le separateur
		Mot uneTranscriptionEnCouleurUnMot;
		Mot uneTranscriptionDeSeparateurDeMot;

		
	  	int positionDebChaineCar = 0; // poistion du debut du mot
		int positionFinChaineCar = 0; // position de la fin du mot qui commence par positionDeb
		int longeurDeLaLigne = 0; // longeur de la ligne
		int ajoutSiBeoinPourLApostrophe = 0; 
		while ( tokenizer.hasMoreTokens() ) {
			ligneDeMots = tokenizer.nextToken().trim();
			//listeDeLaBonneTranspositionDuneLigne = new ArrayList<UneTranscriptionEnCouleurUnMot>();
			// on va chercher chaque mot
			positionDebChaineCar = 0;
		  	longeurDeLaLigne = ligneDeMots.length();
		  	matcherSeparateurMot = patternSeparteurMot.matcher(ligneDeMots); // on definit une matcher
		  	
		  	// on teste on passe en tout cas une fois acr il y a en tout cas un mot ???
			do{
				//?coupleMotEtseparateurDeMot = new ArrayList<UneTranscriptionEnCouleurUnMot>();
				// les motifs peuvent être du type mot-sep-mot mot-sep-sep-....-mot
				// on prend toujours la position du sep (separateur) ce qui avant est un mot sauf quand il y a plusieurs separateur
				// on peut savoir cela si on determine la longeur du mot si =0 pas de mot qu'un separateur
				// s'il y a pas de separateur (ce qui est usuel) on considere que la fin d'un mot est la fin de la ligne
				// si le signe de separation est une apostrophe il faut le savoir car il faudra qu'il soit integrer au mot trouver
				ajoutSiBeoinPourLApostrophe = 0;
				try{
					//matcherSeparateurMot.re
					if (! matcherSeparateurMot.find()){
						positionFinChaineCar = longeurDeLaLigne;
					}else{
						// on prend la position de la fin du mot 
						positionFinChaineCar = matcherSeparateurMot.start();
						if( matcherSeparateurMot.group().equals("'") ||  matcherSeparateurMot.group().equals("’")){
						  	ajoutSiBeoinPourLApostrophe = 1;						
						}
					}
					
					//on a extrait quelque chose mais cela pourrait être pas un mot mais un separateur
					chaineDeCarcateres = ligneDeMots.substring(
							positionDebChaineCar, positionFinChaineCar + ajoutSiBeoinPourLApostrophe);
					// si la chaine est different de vide on l'a prend si non ...
					if(chaineDeCarcateres.length() != 0){
						uneTranscriptionEnCouleurUnMot = new Mot();
						uneTranscriptionEnCouleurUnMot.setOrthographeMot(chaineDeCarcateres);						
						// determine si chaineDeCarcateres est un separateur de caractere
						matcherSiSeparateurDeMotSansApostrophe = patternSeparteurMotSansApostrophe.
										matcher(chaineDeCarcateres);
						if(matcherSiSeparateurDeMotSansApostrophe.find()){
							uneTranscriptionEnCouleurUnMot.setEstCeUnMot(false);
						}
						listeDeMotsEtSeparateursDuText.add(uneTranscriptionEnCouleurUnMot);						
					}

					//maintenant on s'occupe du separateur de caractere sauf si celui-ci est un apostrophe
					if ( ajoutSiBeoinPourLApostrophe != 1 && positionFinChaineCar < longeurDeLaLigne){
						uneTranscriptionDeSeparateurDeMot = new Mot();
						uneTranscriptionDeSeparateurDeMot.setEstCeUnMot(false);
						uneTranscriptionDeSeparateurDeMot.setOrthographeMot(matcherSeparateurMot.group());
						listeDeMotsEtSeparateursDuText.add(uneTranscriptionDeSeparateurDeMot);
					}						
				}catch(Exception e){
				    javax.swing.JOptionPane.showMessageDialog(null,"Il y a un probleme dans le decoupage en mots du texte \r\n " + e.getMessage());
				    return;			
				}
				
				positionDebChaineCar = positionFinChaineCar + 1;
			}while( positionDebChaineCar < longeurDeLaLigne );

			//
			listeDeMotsEtSeparateursDuText.add(uneTranscriptionFinDeLigne);
			//listeDesBonnesTranscription.addAll(listeDeLaBonneTranspositionDuneLigne);
		
		}
		  // return listeDeMotsEtSeparateursDuText;
    }
    
	 public static void reponseBlocEtCSS(
			  StringBuffer reponseBloc,
			  StringBuffer partieCSS,
			  Map<String,String> dictClefCouleurValeurNomCouleur,
			  List<Mot> listeTranscriptionsEnCouleurUnMotFinis){
		  
		  //on contruit de cette maniere la page HTML car on ne sait pas le nombre de ligne qu'aura la page 
		  //et ceci est important pour ecrire la definition des blocs en dessous
		  StringBuffer blocDessous = new StringBuffer();
		  StringBuffer blocDessus = new StringBuffer();
		  
		  long nbrLigne = 0;
		  long maxNbrCaracteres = 0;
		  long nbrCaracteres = 0;
		  
		 // on parcours la liste de mot
		  Iterator<Mot> iterUneTranscriptionEnCouleurUnMot = listeTranscriptionsEnCouleurUnMotFinis.iterator();

		  while ( iterUneTranscriptionEnCouleurUnMot.hasNext()){

			  Mot uneTranscriptionEnCouleurUnMot 
			  									= iterUneTranscriptionEnCouleurUnMot.next();
			  
			//fin de ligne
			  if (uneTranscriptionEnCouleurUnMot.getOrthographeMot().startsWith("<br>")){
				  //on les div des blocs
				  blocDessous.append("</div>\r\n");
				  blocDessus.append("</div>\r\n");
				  
				  // on ajoute cette ligne composé de deux blocs dessous et dessu
				  reponseBloc.append(blocDessous);
				  reponseBloc.append(blocDessus);
				  //on efface les éléments  
				  blocDessous.delete(0,blocDessous.length());
				  blocDessus.delete(0,blocDessus.length());
				  nbrCaracteres = 0;
				  
				  if (nbrCaracteres > maxNbrCaracteres){
					  maxNbrCaracteres = nbrCaracteres; 
					 
				  }
			  }else{
				  // c'est un mot avec sa liste de graphemes
				  Iterator<PhonemeGraphemeCouleur> iterPhonemeGraphemeCouleur = 
					  							uneTranscriptionEnCouleurUnMot.getGraphemePhonemeCouleurDuMot().iterator();
				  while(iterPhonemeGraphemeCouleur.hasNext()){
					  
					  nbrCaracteres += 1;
					  //si on commence la ligne
					  if (nbrCaracteres == 1){
						  //nouvelle ligne
						  nbrLigne += 1;
						  blocDessous.append("<div id=\"bloc_dessous" + nbrLigne + "\" >");
						  blocDessus.append("<div id=\"bloc_dessus" + nbrLigne + "\" >");						  
					  }
					  PhonemeGraphemeCouleur  phonemeGraphemeCouleur = iterPhonemeGraphemeCouleur.next();
					  blocDessous.append("<span class=\"" +phonemeGraphemeCouleur.getNomCouleurBas()+ "\">" + 
							  phonemeGraphemeCouleur.getGraphemes() + "</span>" );
					  
					  blocDessus.append("<span class=\"" +phonemeGraphemeCouleur.getNomCouleurHaut()+ "\">" + 
							  phonemeGraphemeCouleur.getGraphemes() + "</span>");
	  
				  }
			  }		  
			  
		  }
	/*	  //si la dernière ligne ne finit par <br>
		  if ( ! blocDessous.toString().endsWith("</div>\r\n") ){
			  blocDessous.append("</div>\r\n");
			  blocDessus.append("</div>\r\n");
			  reponseBloc.append(blocDessous);
			  reponseBloc.append(blocDessus);
		  }

	*/
		  


		  


		  int hauteurBande = 30;
		  // suite de valeur pour le top
		 //	dessous 0 ;-hauteurBande/2 ; -hauteurBande
		 //	dessus -hauteurBande ;-hauteurBande *1,5 ;-hauteurBande * 2
		 //
		  for(int i = 1; i <= nbrLigne; i++){
			  
			  partieCSS.append("#bloc_dessous" + i + "{position: relative;left: 10px;top: " + (-(i-1)* hauteurBande / 2) + "px;width: " + (nbrCaracteres*10)  + "px;height: " + hauteurBande + "px;padding: 0px;z-index: 1;}\r\n");
			  partieCSS.append("#bloc_dessus" + i + "{position: relative;left: 10px;top: " + (-(i + 1)* hauteurBande / 2 )+ "px;width: " + (nbrCaracteres*10)  + "px;height: " + hauteurBande/2 + "px;padding: 0px;z-index: 2;overflow: hidden;}\r\n");
			  
		  }


		  //la premiere couleur definit n'est pas prise ????
		  partieCSS.append(".couleur0 {  color:E4AAFF ; } \r\n");

		  //le blanc pour le nombre d'occurence
		  partieCSS.append(".white {  color:#FFFFFF ; } \r\n");	
		  // on definit les couleurs en format css
		  for (Iterator<String> iterCouleurs = dictClefCouleurValeurNomCouleur.keySet().iterator() ; iterCouleurs.hasNext() ; ){
			  
			  String couleur = iterCouleurs.next();
			  
			  partieCSS.append("." + dictClefCouleurValeurNomCouleur.get( couleur) + 
					  " {  color:" + couleur + " ; } \r\n");						  
			}

			  
	  }
	  

	  public static void creationFichierHTML(
			  StringBuffer pageHTML,
			  Map<String,String> dictClefCouleurValeurNomCouleur,
			  List<Mot> listeMots){
		  
		  //on contruit de cette maniere la page HTML car on ne sait pas le nombre de ligne qu'aura la page 
		  //et ceci est important pour ecrire la definition des blocs en dessous
		  StringBuffer entetePageHTML = new StringBuffer();
		  StringBuffer partiEcssPageHTML = new StringBuffer();
		  StringBuffer partieBodyPageHTML = new StringBuffer();
		  StringBuffer basDesCaracteres = new StringBuffer();
		  StringBuffer hautDesCaracteres = new StringBuffer();
		  
		  long nbrLigne = 1;
		  long maxNbrCaracteres = 0;
		  long nbrCaracteres = 0;
		  
		  //on construit la partie entete de la page HTML
		  entetePageHTML.append("<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n");
		  entetePageHTML.append("<head>\r\n");
		  entetePageHTML.append("<meta http-equiv=\"Content-Type\" content=\"text/html;  charset=utf-8\" >\r\n");
		  
		  //on construit le body avant la partie css
		  
		  partieBodyPageHTML.append("<body BGCOLOR=\"000000\" style=\"font-family:Verdana, Arial, Helvetica, sans-serif; font-size:48px; font-weight:700\";>\r\n");	  
		  //transcription en couleur dans la page HTML

		  Iterator<Mot> iterUneTranscriptionEnCouleurUnMot = 
			  listeMots.iterator();
		  basDesCaracteres.append("<div id=\"bloc_dessous" + nbrLigne + "\" >");
		  hautDesCaracteres.append("<div id=\"bloc_dessus" + nbrLigne + "\" >");			  

		  while ( iterUneTranscriptionEnCouleurUnMot.hasNext()){
			  Mot uneTranscriptionEnCouleurUnMot 
			  									= iterUneTranscriptionEnCouleurUnMot.next();
			  
			//fin de ligne
			  if (uneTranscriptionEnCouleurUnMot.getOrthographeMot().startsWith("<br>")){
				  nbrLigne += 1;
				  basDesCaracteres.append("</div><div id=\"bloc_dessous" + nbrLigne + "\" >");
				  hautDesCaracteres.append("</div><br><div id=\"bloc_dessus" + nbrLigne + "\" >");
				  if (nbrCaracteres > maxNbrCaracteres){
					  maxNbrCaracteres = nbrCaracteres; 
				  }
			  }else{
				  // c'est un mot avec sa liste de graphemes
				  Iterator<PhonemeGraphemeCouleur> iterPhonemeGraphemeCouleur = 
					  							uneTranscriptionEnCouleurUnMot.getGraphemePhonemeCouleurDuMot().iterator();
				  while(iterPhonemeGraphemeCouleur.hasNext()){
					  nbrCaracteres += 1;
					  PhonemeGraphemeCouleur  phonemeGraphemeCouleur = iterPhonemeGraphemeCouleur.next();
					  basDesCaracteres.append("<span class=\"" +phonemeGraphemeCouleur.getNomCouleurBas()+ "\">" + 
							  phonemeGraphemeCouleur.getGraphemes() + "</span>" );
					  
					  hautDesCaracteres.append("<span class=\"" +phonemeGraphemeCouleur.getNomCouleurHaut()+ "\">" + 
							  phonemeGraphemeCouleur.getGraphemes() + "</span>");
					  /*
					  partieBodyPageHTML.append("<span class =" + phonemeGraphemeCouleur.getNomCouleur() + ">" 
								  + phonemeGraphemeCouleur.getGraphemes() + "</span>");	
					*/			  
				  }
			  }		  
			  
		  }
			  
		  //on rajoute la fin du bloc
		  if ( ! basDesCaracteres.toString().endsWith("</div>") ){
			  basDesCaracteres.append("</div>");			  
		  }
		  if ( !basDesCaracteres.toString().endsWith("</div>")&& !basDesCaracteres.toString().endsWith("</div><br>")){
			  hautDesCaracteres.append("</div>");
		  }
		  
		  partieBodyPageHTML.append(basDesCaracteres);			  
		  partieBodyPageHTML.append(hautDesCaracteres);	
		  
		  partieBodyPageHTML.append("</body></html>");

		  //partie css
		  partiEcssPageHTML.append("<style type=\"text/css\">\r\n ");
		  for(int i = 1; i <= nbrLigne; i++){
			  
			  partiEcssPageHTML.append("#bloc_dessous" + i + "{position: absolute;left: 10px;top: " + ((i-1)* 48 + 10) + "px;width: " + (nbrCaracteres*50)  + "px;height: 50px;padding: 0px;z-index: 1;}\r\n");
			  partiEcssPageHTML.append("#bloc_dessus" + i + "{position: absolute;left: 10px;top: " + ((i-1)* 48 + 10)+ "px;width: " + (nbrCaracteres*50)  + "px;height: 35px;padding: 0px;z-index: 2;overflow: hidden;}\r\n");
			  
		  }


		  //la premiere couleur definit n'est pas prise ????
		  partiEcssPageHTML.append(".couleur0 {  color:E4AAFF ; } \r\n");

		  //le blanc pour le nombre d'occurence
		  partiEcssPageHTML.append(".white {  color:#FFFFFF ; } \r\n");	
		  // on definit les couleurs en format css
		  for (Iterator<String> iterCouleurs = dictClefCouleurValeurNomCouleur.keySet().iterator() ; iterCouleurs.hasNext() ; ){
			  
			  String couleur = iterCouleurs.next();
			  
			  partiEcssPageHTML.append("." + dictClefCouleurValeurNomCouleur.get( couleur) + 
					  " {  color:" + couleur + " ; } \r\n");						  
			}
		  
		  partiEcssPageHTML.append("</style>");
		  partiEcssPageHTML.append("</head>");
		  
		  //on construit la page 
		  pageHTML.append(entetePageHTML);
		  pageHTML.append(partiEcssPageHTML);
		  pageHTML.append(partieBodyPageHTML);
		  	        

	  }

}

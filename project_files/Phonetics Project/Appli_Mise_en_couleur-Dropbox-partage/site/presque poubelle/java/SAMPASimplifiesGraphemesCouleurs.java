package pourColorier;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import aColorier.Mot;
import aColorier.MotColorie;
import aColorier.MotSampaSimplifie;
import aColorier.PhonemeGraphemeCouleur;
import aColorier.Util;

import exception.PhonemeSAMPADeRelationExistePasDsListePhonemeSAMPA;

public class SAMPASimplifiesGraphemesCouleurs {
	
	private Map<String,String> dictClefCouleurValeurNomCouleur = new HashMap<String,String>();
	private PhonemesGraphemes phonemesSAMPASimplifiesGraphemes = new PhonemesGraphemes();

	
	public SAMPASimplifiesGraphemesCouleurs(
			RelationsSAMPASimplifiesEtSAMPAs relationsSAMPASimplifiesEtSAMPAs, PhonemesGraphemes phonemesSAMPAGraphemes)
					throws PhonemeSAMPADeRelationExistePasDsListePhonemeSAMPA{
		//phonemesSAMPASimplifiesGraphemes = phonemesSAMPAsGraphemes;
		creerSampaSimpGraphemes(relationsSAMPASimplifiesEtSAMPAs,phonemesSAMPAGraphemes);
		phonemesSAMPASimplifiesGraphemes.creerDictClefPhonemeValeurPhonemeGraphemes();
	}

	
	private void creerSampaSimpGraphemes(		
			RelationsSAMPASimplifiesEtSAMPAs relationsSAMPASimplifiesEtSAMPAs, 
			PhonemesGraphemes phonemesSAMPAGraphemes)
					throws PhonemeSAMPADeRelationExistePasDsListePhonemeSAMPA{
				  
				  int permetCreerCouleurUnique = 1; 
				  
				  // itere sur les relations SAMPASimplifie et SAMPA
				  Iterator<RelationSAMPASimplifieEtSAMPAs> iterateurRelation = relationsSAMPASimplifiesEtSAMPAs.
				  											getListeRelationsSAMPASimplifiesEtSAMPAs().iterator();
				  
				  PhonemeGraphemesCouleur phonemeSAMPASimplifieGraphemes = new PhonemeGraphemesCouleur();

				 //on va iterer sur les relations afin de creer les phonemesSAMPAGraphemes  
				  while (iterateurRelation.hasNext()){
					  //item d'iteration
					  RelationSAMPASimplifieEtSAMPAs itemRelationSAMPASimplifieEtSAMPAs = iterateurRelation.next();
					  permetCreerCouleurUnique += 1;
					  
					  // instentation d'un PhonemeGraphemes introduction du phonemeSAMPASimplifie et de la couleur
					  phonemeSAMPASimplifieGraphemes = new PhonemeGraphemesCouleur();
					  phonemeSAMPASimplifieGraphemes.setPhoneme(itemRelationSAMPASimplifieEtSAMPAs.getPhonemeSAMPASimplifie());
					  
					  // on cree un dictionnaire des couleurs (clef couleur et valeur nomCouleur) ici pour la couleur du bas
					  if (!dictClefCouleurValeurNomCouleur.containsKey(itemRelationSAMPASimplifieEtSAMPAs.getCouleurBas())){
						  dictClefCouleurValeurNomCouleur.put(
								  itemRelationSAMPASimplifieEtSAMPAs.getCouleurBas(), "couleur"+ permetCreerCouleurUnique);
						  permetCreerCouleurUnique +=1;
					  }
					  // on met le nom de la couleur du bas
					  phonemeSAMPASimplifieGraphemes.setNomCouleurBas(
							  dictClefCouleurValeurNomCouleur.get(itemRelationSAMPASimplifieEtSAMPAs.getCouleurBas()));
					  
					  // on cree un dictionnaire des couleurs (clef couleur et valeur nomCouleur) ici pour la couleur du haut			  
					  if (!dictClefCouleurValeurNomCouleur.containsKey(itemRelationSAMPASimplifieEtSAMPAs.getCouleurHaut())){
						  dictClefCouleurValeurNomCouleur.put(
								  itemRelationSAMPASimplifieEtSAMPAs.getCouleurHaut(), "couleur"+ permetCreerCouleurUnique);
						  permetCreerCouleurUnique +=1;
					  }	
					// on met le nom de la couleur du haut
					  phonemeSAMPASimplifieGraphemes.setNomCouleurHaut(
							  dictClefCouleurValeurNomCouleur.get(itemRelationSAMPASimplifieEtSAMPAs.getCouleurHaut()));
					  
					  
					  // la liste des grapheme est egale à la liste des graphemes de tous les phonemes associes mais on enleve les doublons 
					  List<String> listeGraphemeDuSAMPASimplifie = new ArrayList<String>();
					  
					  Iterator<String> iterateurPhonemeSAMPA = itemRelationSAMPASimplifieEtSAMPAs.getListePhonemeSAMPA().iterator();
					  // itere sur Graphemes
					   while ( iterateurPhonemeSAMPA.hasNext()){
						   //on itere sur les phonemes SAMPA associes à ce phoneme SAMPA simplifie
						   String phonemeSAMPA = iterateurPhonemeSAMPA.next();
						   List<String> listeGraphemeDuSAMPA;
						   // si le phonemeSAMPA N'existe pas dans le getDictClefPhonemeValeurphonemeGraphemes de phonemesSAMPAGraphemes
						   //c'est qu'il doit pas exister dans la ListePhonemesSAMPAGraphemes.xml
						   if (! phonemesSAMPAGraphemes.getDictClefPhonemeValeurphonemeGraphemes()
								   .containsKey(phonemeSAMPA)){
							   throw new  PhonemeSAMPADeRelationExistePasDsListePhonemeSAMPA(
									   "Le phoneme SAMPA " + phonemeSAMPA + " n'existe pas dans la liste ListePhonemesSAMPAGraphemes.xml." );
						   }
						   //le phonemeSAMPAGraphreme
						   PhonemeGraphemesCouleur phonemeSAMPAGraphemes = 
								   phonemesSAMPAGraphemes.getDictClefPhonemeValeurphonemeGraphemes().get(phonemeSAMPA);
						   // la liste des graphemes
						   listeGraphemeDuSAMPA = phonemeSAMPAGraphemes.getListGraphemes();
						   Iterator<String> iterateurGraphemeDuPhonemeSAMPA = listeGraphemeDuSAMPA.iterator();
						   String grapheme;
							// si le graphemes existe dejà on ne fait rien
						   //sinon on l'introduit dans le tableau
						   while (iterateurGraphemeDuPhonemeSAMPA.hasNext()){
							   grapheme = iterateurGraphemeDuPhonemeSAMPA.next();
							   if ( !listeGraphemeDuSAMPASimplifie.contains(grapheme)){
								   listeGraphemeDuSAMPASimplifie.add(grapheme);
							   }		
						   }
		 
					   }
					   //on ordre alphabetiquement la liste des graphemes
					   Collections.sort(listeGraphemeDuSAMPASimplifie);
					   //on l'introduit dans le phonemeSAMPASimplifieGraphemes
					   phonemeSAMPASimplifieGraphemes.setListGraphemes(listeGraphemeDuSAMPASimplifie);
					   // on introduit le phonemeSAMPASimplifie dans le container phonemesSAMPASimplifiesGraphemes
					   phonemesSAMPASimplifiesGraphemes.getListPhonemeGraphemes().add(phonemeSAMPASimplifieGraphemes);
				  }
				  		  
			  }
	
	  
	  public  void mettreEnCouleurLesMots(
			  List<Mot> listeDeMotsEtSeparateursDeText,
			  List<String> listeMessages
			  ){
		  	  
		  // on passe en revue les differents element de listeDeMotsEtSeparateursDuText ceux qui sont les separateurs (on fait on peint en blanc 
		  // et les autres que l'on cherche
		  Iterator<Mot> iterListeDeMots= listeDeMotsEtSeparateursDeText.iterator();
		  
		  Mot unMot;

		  //liste des transcriptions d'un mot
		  String mot = "";
		  	//on boucle sur coupleMotEtseparateurDeMot
		  while(iterListeDeMots.hasNext()){
			  unMot = iterListeDeMots.next();
			  
			 //listeTranscriptionsEnCouleurUnMotFinis = new ArrayList<Mot>();
			  // si c'est pas un mot on colorie en blanc le signe 
			  if ( ! unMot.getEstCeUnMot()){
				  mettreEnCouleurLeSeparateur(unMot);
			  }else{
				  //si c'est un mot à colorier
				  // on determine le mot à chercher
				//  mot = uneTranscriptionEnCouleurUnMot.getResteOrthographe();
				  mettreEnCouleurUnVraiMot(unMot,phonemesSAMPASimplifiesGraphemes,
						  dictClefCouleurValeurNomCouleur, listeMessages);
				  
					choisirLaBonneTransposition(unMot, listeMessages);				  
			  }

		  }  

	  }	

	  

	  public static void mettreEnCouleurLeSeparateur(
			  Mot separateur){
		  
		  //les motifs qui sont des espaces
		String motifEquivalentEspace = "[ \\n\\r\\f\\t]"; //on definit un motif
		Pattern patternEquivalentEspace = Pattern.compile(motifEquivalentEspace);//on definit un pattern
		Matcher matcherEquivalentEspace;	  	
		matcherEquivalentEspace = patternEquivalentEspace.matcher(separateur.getOrthographeMot());
					
		//on construit le PhonemeGraphemeCouleur pour le separateur
		PhonemeGraphemeCouleur seprateurPhonemeGraphemeCouleur = new PhonemeGraphemeCouleur(); 
		seprateurPhonemeGraphemeCouleur.setNomCouleurBas("white");
		seprateurPhonemeGraphemeCouleur.setNomCouleurHaut("white");
		
		if (separateur.getOrthographeMot().length() == 1 && matcherEquivalentEspace.find()   ){
			seprateurPhonemeGraphemeCouleur.setGraphemes("&nbsp;");
		}else{
			seprateurPhonemeGraphemeCouleur.setGraphemes(separateur.getOrthographeMot());			  
		}
		
		separateur.getGraphemePhonemeCouleurDuMot().add(seprateurPhonemeGraphemeCouleur);	  
	  }

	 
	  public static void mettreEnCouleurUnVraiMot(
			  Mot unMot,
			  PhonemesGraphemes phonemesSAMPASimplifiesGraphemes,
			  //List<Mot> listeMot,
			  Map<String,String> dictClefCouleurValeurNomCouleur,
			  List<String> listeMessages
			  ){
		  		  
		  //pointera le motSampaSimplifie (= sampa simplifie et liste de mot colorie) qui sera utilise pour l'iteration
		  MotSampaSimplifie motSampaSimplifies;
		  		  
		  //on cree l'iterator sur mot sampa simplifie qui permet d'ajouter, d'effacer, modifier un element des liste mot 
		  Iterator<MotSampaSimplifie> iterListeMotSampaSimplifies 
		  														= unMot.getListeMotSampaSimplifies().iterator();
		  
		  while(iterListeMotSampaSimplifies.hasNext()){
			  
			  // on prend l'element suivant
			  motSampaSimplifies = iterListeMotSampaSimplifies.next();
			  
			  // element de l'iteration
			  MotColorie unMotColorie;
			  
			  //on cree le premier mot colorie avec la Sampa simplifie 
			  MotColorie lePremierMotColorie = new MotColorie();
			  // on met la sampa simplifie
			  lePremierMotColorie.setResteListeSAMPASimplifie(motSampaSimplifies.getListeSAMPASimplifie());
			  lePremierMotColorie.setResteOrthographe(unMot.getOrthographeMot());
			  // on cree la liste et on le met dedans
			  List<MotColorie> listeMotColorie = new ArrayList<MotColorie>();
			  listeMotColorie.add(lePremierMotColorie);

			  // on va devoir regarder les transcriptions en couleur de toutes les phonetiques SAMPA simplifies 
			  ListIterator<MotColorie> listeIterlisteMotColorie = listeMotColorie.listIterator();
			  			  
			  while( listeIterlisteMotColorie.hasNext()){
				
				  unMotColorie = listeIterlisteMotColorie.next();
				  listeIterlisteMotColorie.remove();
				  // phoneme à chercher		  
				  StringBuffer phonemesAChercher = new StringBuffer();	  			  
				  phonemesAChercher.delete(0,phonemesAChercher.length());
				  //on itere sur tous les sampaSimplifies possibles
				  for(int i=0; i < unMotColorie.getResteListeSAMPASimplifie().size(); i++){
					  
					  
					  //on definit le ou les phonemes (phonemesAChercherBuffer) pour le(s)quel(s) on cherchera les graphemes
					  phonemesAChercher.append(unMotColorie.getResteListeSAMPASimplifie().get(i));
					  
					  PhonemeGraphemesCouleur phonemeSAMPASimplifieGraphemesCouleur;
					  
					  if(!phonemesSAMPASimplifiesGraphemes.getDictClefPhonemeValeurphonemeGraphemes()
							  .containsKey(phonemesAChercher.toString()) ){			  
						  continue;
					  }
					  //on determine les graphemes pour ce phoneme SAMPASimplifie qui existe
					  phonemeSAMPASimplifieGraphemesCouleur = phonemesSAMPASimplifiesGraphemes
					  	.getDictClefPhonemeValeurphonemeGraphemes().get(phonemesAChercher.toString());
					  
					  // chaine de tous les graphemes possibles avec ce resteOrthographe
					  String rechercheGrapheme;
					  for(int k=1; k <= unMotColorie.getResteOrthographe().length(); k++){
						  rechercheGrapheme = unMotColorie.getResteOrthographe()
						  		                              .substring(0, k).toLowerCase();
						  //cette chaine de grapheme existe donc c'est un cas possible 
						  if (phonemeSAMPASimplifieGraphemesCouleur.getListGraphemes().contains(rechercheGrapheme)){
							  // on cree un nouveau ResteOrthographeListeSAMPASimplifie qui contiendra 
							  // la transcription en couleur en cours
							  MotColorie nouveauMotColorie = new MotColorie();
							  //on introduit le reste d'orthographe
							  nouveauMotColorie.setResteOrthographe(
									  unMotColorie.getResteOrthographe().substring(k));
							  //on introduit le reste de SAMPA simplifie
							  nouveauMotColorie.setResteListeSAMPASimplifie(
									  unMotColorie.getResteListeSAMPASimplifie().subList
									  (i+1,unMotColorie.getResteListeSAMPASimplifie().size() ));
							  //on introduit les phonemes dejà colorie
							  nouveauMotColorie.getListePhonemeGraphemeCouleur().
							  	addAll(unMotColorie.getListePhonemeGraphemeCouleur());
							  
							  PhonemeGraphemeCouleur phonemeGraphemeCouleur = new PhonemeGraphemeCouleur();
							  phonemeGraphemeCouleur.setGraphemes(
									  unMotColorie.getResteOrthographe().substring(0, k));
							  phonemeGraphemeCouleur.setPhoneme(phonemesAChercher.toString());
							  phonemeGraphemeCouleur.setNomCouleurBas(
									  phonemeSAMPASimplifieGraphemesCouleur.getNomCouleurBas());
							  phonemeGraphemeCouleur.setNomCouleurHaut(
									  phonemeSAMPASimplifieGraphemesCouleur.getNomCouleurHaut());
							  
							  nouveauMotColorie.getListePhonemeGraphemeCouleur()
							  	.add(phonemeGraphemeCouleur);
							  
							  if ( nouveauMotColorie.getResteListeSAMPASimplifie().size() == 0 &&
									  nouveauMotColorie.getResteOrthographe().length() == 0  ){
								  
								  //on ajoute la transcription en couleur
								  motSampaSimplifies.getListeMotColorie().add(nouveauMotColorie);
								  
								  }else if (nouveauMotColorie.getResteOrthographe().length() != 0 && 
										  nouveauMotColorie.getResteListeSAMPASimplifie().size() != 0){  
								  // la transcription n'est pas finie et peu se poursiuvre car la phonetique n'est pas vide
								  // de même pour le reste orthographe
									  listeIterlisteMotColorie.add(nouveauMotColorie);
								  // pour que le curseur soit depacer avant le nouveau nouvelleTranscriptionEnCouleurUnMot inserer
									  listeIterlisteMotColorie.previous();
							  }		  
						  }
					  }
	
				  }
			  }
		  }

		  if ( ! unMot.miseEnCouleurExiste()){
				// il y a pas de transcription de couleur trouve mais on cree et motColorie avec le mot ecrit en blanc 
				// et on met que ce n'est plus un mot
				  unMot.setEstCeUnMot(false);
				  
				  //dessine en blanc
				  PhonemeGraphemeCouleur phonemeGraphemeCouleur = new PhonemeGraphemeCouleur();
				  phonemeGraphemeCouleur.setGraphemes(unMot.getOrthographeMot());
				  phonemeGraphemeCouleur.setNomCouleurBas("white");
				  phonemeGraphemeCouleur.setNomCouleurHaut("white");
				  
				  //on affichera cette mise en couleur 
				  unMot.getGraphemePhonemeCouleurDuMot().add(phonemeGraphemeCouleur);
				  listeMessages.add("La transcription en couleur du mot " + unMot.getOrthographeMot() + " n'a pas pu être faite.");
			}
		  
	  }


	  public void choisirLaBonneTransposition(Mot unMot, List<String> listeMessages){  
		  
			 
		  if ( unMot.getListeMotSampaSimplifies().size() > 0){
			  
			  MotSampaSimplifie MotSampaSimplifie = ((MotSampaSimplifie) unMot.getListeMotSampaSimplifies().get(0));

			  if( MotSampaSimplifie.getListeMotColorie().size() > 0){
				  MotColorie motColorie = MotSampaSimplifie.getListeMotColorie().get(0);
				  
			  		if ( motColorie.getListePhonemeGraphemeCouleur().size() > 0 ){	
			  			unMot.setGraphemePhonemeCouleurDuMot(motColorie.getListePhonemeGraphemeCouleur());
			  		}
				  
			  }
		  }
		  
		  
	  }
	/**
	 * @return the dictClefCouleurValeurNomCouleur
	 */
	public Map<String, String> getDictClefCouleurValeurNomCouleur() {
		return dictClefCouleurValeurNomCouleur;
	}
	  
	  
}

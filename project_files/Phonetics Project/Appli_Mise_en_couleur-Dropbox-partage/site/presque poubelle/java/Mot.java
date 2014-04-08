package aColorier;

import java.util.ArrayList;
import java.util.List;

/**
 *Un objet de cette classe permet de stocker une transcription possible en couleur d'un mot.
 *En faite, elle stocke egalement une transcription en cours (pas achevee). On sait si la transcription
 *n'est pas achevee si la grandeur de la liste resteOrthographePhonetique n'est pas egale à zero.
 *La methode compareTo permet de la classer la liste selon la grandeur resteOrthographePhonetique.
 * 
 * @author stephan seewer
 */

/** La classe contient tout les coloriages du mot (= mot ou separateur) **/ 
public class Mot  {
	
	/** orthographe du mot **/
	private String orthographeMot = "";
	/** phonetique sampa  **/
	private String phonetiqueSAMPA = "";
	/** si c'est un mot ou un separateur de mots ( , . ; ! etc **/
	private boolean estCeUnMot = true;

	/** liste des mots colories selon les differentes sampa simplifies 
	 * (sampa peut donner plusieurs sampa simplifies qui chacun d'eux peux faire plusieurs coloriages **/
	private List<MotSampaSimplifie> listeMotSampaSimplifies = new ArrayList<MotSampaSimplifie>();

	//la coloration chosie	pour le mot
	private List<PhonemeGraphemeCouleur> graphemePhonemeCouleurDuMot = new ArrayList<PhonemeGraphemeCouleur>();
	
	public String getOrthographeMot() {
		return orthographeMot;
	}

	public void setOrthographeMot(String orthographeMot) {
		this.orthographeMot = orthographeMot;
	}
	
	public String getPhonetiqueSAMPA() {
		return phonetiqueSAMPA;
	}

	public void setPhonetiqueSAMPA(String phonetiqueSAMPA) {
		this.phonetiqueSAMPA = phonetiqueSAMPA;
	}
	
	public boolean getEstCeUnMot() {
		return estCeUnMot;
	}

	public void setEstCeUnMot(boolean estCeUnMot) {
		this.estCeUnMot = estCeUnMot;
	}
	
	/**
	 * @return the listeMotColorie
	 */
	public List<MotSampaSimplifie> getListeMotSampaSimplifies() {
		return listeMotSampaSimplifies;
	}

	/**
	 * @param listeMotColorie the listeMotColorie to set
	 */
	public void setListeMotSampaSimplifies(List<MotSampaSimplifie> listeMotSampaSimplifies) {
		this.listeMotSampaSimplifies = listeMotSampaSimplifies;
	}

	/**
	 * @return the graphemePhonemeCouleurDuMot
	 */
	public List<PhonemeGraphemeCouleur> getGraphemePhonemeCouleurDuMot() {
		return graphemePhonemeCouleurDuMot;
	}

	/**
	 * @param graphemePhonemeCouleurDuMot the graphemePhonemeCouleurDuMot to set
	 */
	public void setGraphemePhonemeCouleurDuMot(
			List<PhonemeGraphemeCouleur> graphemePhonemeCouleurDuMot) {
		this.graphemePhonemeCouleurDuMot = graphemePhonemeCouleurDuMot;
	}

	
	public boolean miseEnCouleurExiste(){
		
		if( listeMotSampaSimplifies.size() == 0 || ((MotSampaSimplifie) listeMotSampaSimplifies.get(0)).getListeMotColorie().size() == 0){
			return false;
		}else{
			return true;
		}
	}



/*
	@Override public boolean equals( Object  donneesPourMettreEnCouleurUnMot) {
	    if ( donneesPourMettreEnCouleurUnMot == null || 
	    		this.getClass()  != donneesPourMettreEnCouleurUnMot.getClass() ) return false;
	    
	    if ( this.getResteOrthographePhonetiqueSAMPASimplifie().size() ==
	    		(( UneTranscriptionEnCouleurUnMot)donneesPourMettreEnCouleurUnMot)
	    			.getResteOrthographePhonetiqueSAMPASimplifie().size())
	    	return true;

		return false;
	}
	
	public int compareTo(UneTranscriptionEnCouleurUnMot unDonneesPourMettreEnCouleurUnMot){
		if (this == unDonneesPourMettreEnCouleurUnMot)
			return -1;
		if (unDonneesPourMettreEnCouleurUnMot == null || getClass() != unDonneesPourMettreEnCouleurUnMot.getClass()) {
			return -1;
		}
		int diff = unDonneesPourMettreEnCouleurUnMot.getResteOrthographePhonetiqueSAMPASimplifie().size() 
										- this.getResteOrthographePhonetiqueSAMPASimplifie().size();
		if (  diff < 0 )
			return -1;
		else if (diff==0)
			return 0;
		else
			return 1;
	}
*/
	/*	public int compareTo(Object donneesPourMettreEnCouleurUnMot){
    if (!(donneesPourMettreEnCouleurUnMot instanceof DonneesPourMettreEnCouleurUnMot))
      throw new ClassCastException("Un object DonneesPourMettreEnCouleurUnMot est excepte.");
    int nombreDePhonemeATranscrireEncore = ((DonneesPourMettreEnCouleurUnMot) donneesPourMettreEnCouleurUnMot).
    															getResteOrthographePhonetique().size();  
    return this.getResteOrthographePhonetique().size() - nombreDePhonemeATranscrireEncore;    
}
*/	
	
	/*
	 *   int idx=0; int tokenCount;
    String words[]=new String [500];
    String message="The text of the message to be scanned.";
    StringTokenizer st=new StringTokenizer(message);
    tokenCount=st.countTokens();
    System.out.println("Number of tokens = " + tokenCount);
    while (st.hasMoreTokens()) // is there stuff to get?
        {words[idx]=st.nextToken(); idx++;}
    for (idx=0;idx<tokenCount; idx++)
        {System.out.println(words[idx]);}

	 */
	

}

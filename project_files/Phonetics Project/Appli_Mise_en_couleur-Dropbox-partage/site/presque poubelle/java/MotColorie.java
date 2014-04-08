package aColorier;

import java.util.ArrayList;
import java.util.List;
/** un mot colorie  **/
public class MotColorie {
	

	/** lorsque l'on determine les couleurs on a besoin d'une varaible qui nous renseigne sur
	 * l'orthographe qui n'a pas encore mis en couleur */
	private String resteOrthographe;
	
	/** lorsque l'on determine les couleurs on a besoin d'une varaible qui nous renseigne sur
	 * la phonetique restante qui n'a pas encore mis en couleur */	
	private List<String> resteListeSAMPASimplifie = new ArrayList<String>();
	
	/** le mot colorie avec la liste des graphies avec leur couleur corresponadante et le phoneme**/
	private List<PhonemeGraphemeCouleur> listePhonemeGraphemeCouleur = new ArrayList<PhonemeGraphemeCouleur>();

	
	
	public String getResteOrthographe() {
		return resteOrthographe;
	}
	public void setResteOrthographe(String resteOrthographe) {
		this.resteOrthographe = resteOrthographe;
	}

	/**
	 * @return the resteListeSAMPASimplifie
	 */
	public List<String> getResteListeSAMPASimplifie() {
		return resteListeSAMPASimplifie;
	}
	/**
	 * @param resteListeSAMPASimplifie the resteListeSAMPASimplifie to set
	 */
	public void setResteListeSAMPASimplifie(List<String> resteListeSAMPASimplifie) {
		this.resteListeSAMPASimplifie = resteListeSAMPASimplifie;
	}	
	
	public List<PhonemeGraphemeCouleur> getListePhonemeGraphemeCouleur() {
		return listePhonemeGraphemeCouleur;
	}
	public void setListePhonemeGraphemeCouleur(
			List<PhonemeGraphemeCouleur> listePhonemeGraphemeCouleur) {
		this.listePhonemeGraphemeCouleur = listePhonemeGraphemeCouleur;
	}
	

}

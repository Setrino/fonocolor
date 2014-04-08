package aColorier;

import java.util.ArrayList;
import java.util.List;

public class MotEnCouleur implements Comparable<MotEnCouleur>{
	
	private String resteOrthographe;
	private String restePhonetique;
	private List<PhonemeGraphemeCouleur> listePhonemeGraphemesCouleur  = 
																new ArrayList<PhonemeGraphemeCouleur>();	
	
	public String getResteOrthographe() {
		return resteOrthographe;
	}

	public void setResteOrthographe(String resteOrthographe) {
		this.resteOrthographe = resteOrthographe;
	}

	public String getRestePhonetique() {
		return restePhonetique;
	}

	public void setRestePhonetique(String restePhonetique) {
		this.restePhonetique = restePhonetique;
	}

	public List<PhonemeGraphemeCouleur> getListePhonemeGraphemesCouleur() {
		return listePhonemeGraphemesCouleur;
	}

	public void setListePhonemeGraphemesCouleur(
			List<PhonemeGraphemeCouleur> listePhonemeGraphemesCouleur) {
		this.listePhonemeGraphemesCouleur = listePhonemeGraphemesCouleur;
	}

	public int compareTo(MotEnCouleur unMotEnCouleur){
		if (this == unMotEnCouleur )
			return 0;
		if (unMotEnCouleur == null || getClass() != unMotEnCouleur.getClass()) {
			return -1;
		}
		int diff = unMotEnCouleur.restePhonetique.length() - restePhonetique.length();
		if (  diff < 0 )
			return -1;
		else if (diff==0)
			return 0;
		else
			return 1;
	}
	
	public boolean equals(Object obj) {
		//si l'objet pointe sur la même memoire que this
		if (this == obj) {
			return true;
		}
		//si l'objet n'est pas du bon type
		if (obj == null || getClass() != obj.getClass()) {
			return false;
		}
		//on instancie l'element du type MotEnCouleur
		final MotEnCouleur motEnCouleur = (MotEnCouleur) obj;

		return restePhonetique == null ? motEnCouleur.restePhonetique == null :
				this.getRestePhonetique().length() == (motEnCouleur.getRestePhonetique().length()) ;

		}
	
	
	
	

}

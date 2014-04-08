package aColorier;

import java.util.ArrayList;
import java.util.List;

/** MotSampaSimplifies contient tous les mots colories selon toutes les sampa simplifies **/ 
public class MotSampaSimplifie {

	/** resteListePhonetiqueSAMPA est utile lors de la construction  listeSAMPASimplifie **/
	private List<String>  resteListePhonetiqueSAMPA = new ArrayList<String>(); 

	/** listeSAMPASimplifie est la sampa simplifie sous forme de liste **/
	private List<String> listeSAMPASimplifie = new ArrayList<String>();
	
	/** liste de mots colories avec la sampa simplifie ci-dessus **/ 
	private List<MotColorie> listeMotColorie = new ArrayList<MotColorie>();

	
	
	/**
	 * resteListePhonetiqueSAMPA est utile lors de la construction  listeSAMPASimplifie
	 * @return the resteListePhonetiqueSAMPA
	 */
	public List<String> getResteListePhonetiqueSAMPA() {
		return resteListePhonetiqueSAMPA;
	}

	/**
	 * resteListePhonetiqueSAMPA est utile lors de la construction  listeSAMPASimplifie
	 * @param resteListePhonetiqueSAMPA the resteListePhonetiqueSAMPA to set
	 */
	public void setResteListePhonetiqueSAMPA(List<String> resteListePhonetiqueSAMPA) {
		this.resteListePhonetiqueSAMPA = resteListePhonetiqueSAMPA;
	}

	/**
	 * listeSAMPASimplifie est la sampa simplifie sous forme de liste
	 * @return the listeSAMPASimplifie
	 */
	public List<String> getListeSAMPASimplifie() {
		return listeSAMPASimplifie;
	}

	/**
	 * listeSAMPASimplifie est la sampa simplifie sous forme de liste
	 * @param listeSAMPASimplifie the listeSAMPASimplifie to set
	 */
	public void setListeSAMPASimplifie(List<String> listeSAMPASimplifie) {
		this.listeSAMPASimplifie = listeSAMPASimplifie;
	}

	/**
	 * liste de mots colories avec la sampa simplifie de cet objet
	 * @return the listeMotColorie
	 */
	public List<MotColorie> getListeMotColorie() {
		return listeMotColorie;
	}

	/**
	 * liste de mots colories avec la sampa simplifie de cet objet
	 * @param listeMotColorie the listeMotColorie to set
	 */
	public void setListeMotColorie(List<MotColorie> listeMotColorie) {
		this.listeMotColorie = listeMotColorie;
	}

	
}

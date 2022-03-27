/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ejemplo;

import Analizadores.Parser;
import Analizadores.Scanner;
import java.io.BufferedReader;
import java.io.StringReader;


/**
 *
 * @author jose_
 */
public class Ejemplo {

	/**
	 * @param args the command line arguments
	 */
	public static void main(String[] args) {
		// TODO code application logic here
		try {
			String text = "1+1*2/10;";
			Scanner scanner = new Analizadores.Scanner(new BufferedReader( new StringReader(text)));
			Parser parser = new Parser(scanner);
			parser.parse();
		} catch (Exception e) {
			System.err.println(e);
		}
	}
	
}

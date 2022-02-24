/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package errores;

import Instruction.Instruction;

/**
 *
 * @author jose_
 */
public class Errores {

	/**
	 * @param args the command line arguments
	 */
	public static void main(String[] args) {
		String text = "5+5*2;# 53-455 3*8/2;";
		Instruction ins = Instruction.getInstance();
		
		ins.analize(text);
		for (int i = 0; i < ins.list.size(); i++) {
			System.err.println("MENSAJE: "+ins.list.get(i).getMessage() + " TIPO: "+ins.list.get(i).getType());
		}
	}
	
}

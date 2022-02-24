/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Instruction;

import Error.LinkedListError;
import analizadores.Parser;
import analizadores.Scanner;
import java.io.BufferedReader;
import java.io.StringReader;

/**
 *
 * @author jose_
 */
public class Instruction {
	public static LinkedListError list;
	public static Instruction instruction;
	
	
	public void analize(String text){
		try {
			System.out.println("Inicio de analisis");
			list = new LinkedListError();
			Scanner scanner = new Scanner(new BufferedReader(new StringReader(text)));
			Parser parser = new Parser(scanner);
			parser.parse();
			System.out.println("Fin de analisis");
		} catch (Exception e) {
		}
	}
	
	public static Instruction getInstance(){
		if(instruction == null){
			list = new LinkedListError();
			instruction = new Instruction();
		}
		return instruction;
	}
	
	public static LinkedListError getList(){
		return list;
	}
	
	public static void  setList(LinkedListError list){
		Instruction.list = list;
	}
}

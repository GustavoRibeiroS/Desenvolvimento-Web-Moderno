import java.util.Arrays;

public class Vetores {
    public static void main(String[] args) {

        int[] numeros = new int [5];

        numeros[0] = 1;
        numeros[1] = 2;
        numeros[2] = 3;
        numeros[3] = 4;
        numeros[4] = 5;
        
        for (int i = 0; i < numeros.length; i++) {
            System.out.println(numeros[i]);
        }

        String[] letras = {"A", "B", "C", "D", "E"};
        for (int i = 0; i < letras.length; i++) {
            System.out.println("Arrey em Str: " + letras[i]);
        }

        System.out.println(Arrays.toString(letras));

        int[] numerosObservar = {9,10,12,25,2};
        int maior = numerosObservar[0];
        int menor = numerosObservar[0];
        int media = 0;
        
        for (int i = 0; i < numerosObservar.length; i++) {
            if (numerosObservar[i]> maior) {
                maior = numerosObservar[i];
            }if (numerosObservar[i] < menor) {
                menor = numerosObservar[i];
            }
            media += numerosObservar[i];
        }
        System.out.println("Maior: " + maior);
        System.out.println("Menor: " + menor);
        System.out.println("Media: " + media/numerosObservar.length);
    }
}
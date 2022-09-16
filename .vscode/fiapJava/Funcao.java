public class Funcao {
 public static void main(String[] args) {
        String nomeOriginal = "Gusta";
        saudacao(nomeOriginal);

        int resultado = soma(2, 3);
        System.out.println(resultado);
    }

    public static void saudacao(String nomeParametro) {
        System.out.println("Ola, " + nomeParametro);
    }
    
    public static int soma(int a, int b){
        return a + b;
    }

}
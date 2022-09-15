public class Poligrafo {
    public static void main(String[] args) {
        boolean fimDeSemana = true;
        boolean fazendoSol = true;
        boolean vamosAPraia = fimDeSemana && fazendoSol;
        
        System.out.println(vamosAPraia);

        String mensagem = fimDeSemana ? "E fim de semana" : "Não e fim de semana"; 
        System.out.println(mensagem);
        
    }
}
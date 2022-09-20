public class Veiculo {

 

    public void acelerar() {

         System.out.println("Veiculo acelerando");

    }

   

}



public class Carro extends Veiculo {



    public void acelerar() {

         System.out.println("Carro acelerando");

    }

   

}

public class Teste{
    public static void main(String[] args) {

        Veiculo veiculo = new Carro();

        veiculo.acelerar();

   }
}
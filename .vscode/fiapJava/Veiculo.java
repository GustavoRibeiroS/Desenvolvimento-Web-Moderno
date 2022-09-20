public class Veiculo {

 

    private String modelo;

   

    public Veiculo(String modelo) {

         this.modelo = modelo;

    }



    public String getModelo() {

         return modelo;

    }



    public void setModelo(String modelo) {

         this.modelo = modelo;

    }

   

}

public class Carro extends Veiculo {



    public Carro(String modelo) {

         super.setModelo(modelo);

    }

   

}

public class Teste {



    public static void main(String[] args) {

         Veiculo veiculo = new Carro("Fusca");

    }

   

}
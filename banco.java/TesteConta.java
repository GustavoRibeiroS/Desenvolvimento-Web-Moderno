public class TesteConta {
    public static void main(String[] args) {
        
        Conta contaCorrente = new Conta();
        Conta contaPoupaca = new Conta();
        Conta contaInvestimento = new Conta();

        contaCorrente.numero = 11;
        contaCorrente.saldo = 20.50;
        contaCorrente.cliente.nome = "Gustavo";
        contaCorrente.cliente.idade = 19;

        contaPoupaca.numero = 22;
        contaPoupaca.saldo = 30;
        contaPoupaca.cliente.nome = "Joao";
        contaPoupaca.cliente.idade = 24;


        contaInvestimento.numero = 33;
        contaInvestimento.saldo = 40;
        contaInvestimento.cliente.nome = "Paulo";
        contaInvestimento.cliente.idade = 17;

        System.out.println(contaCorrente.numero);
        System.out.println(contaCorrente.saldo);
        System.out.println(contaCorrente.cliente.nome);
        System.out.println(contaCorrente.cliente.idade);

    }
}

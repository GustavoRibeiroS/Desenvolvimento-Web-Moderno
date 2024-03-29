import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.TextStyle;
import java.util.Locale;

public class StringData {
    public static void main(String[] args) {
        String nome = "Gusta";

        //ISO 8601
        LocalDate hoje = LocalDate.now();
        System.out.println(hoje);

        Locale brasil = new Locale("pt","BR");
        System.out.println(hoje.getDayOfWeek().getDisplayName(TextStyle.FULL, brasil));

        String diaSemana = hoje.getDayOfWeek().getDisplayName(TextStyle.FULL, brasil);
        String saudacao;

        LocalDateTime agora = LocalDateTime.now();
        if (agora.getHour() >=0 && agora.getHour() <= 12) {
            saudacao = "Bom dia";
            
        } else if (agora.getHour() >= 12 && agora.getHour() <= 18) {
            saudacao = "Boa Tarde";

        }else if(agora.getHour() >= 18 && agora.getHour() <= 24){
            saudacao = "Boa Noite";
        } else{
            saudacao = "Boa noite";
        }

        System.out.printf("Ola, %s. Hoje e %s. %n%s", nome, diaSemana, saudacao.toUpperCase());
    }
}

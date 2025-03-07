import java.time.LocalTime;

public class Aluno {
    private String nome;
    private int idade;
    private String curso;
    private String[] aulasAssistidas;
    private int contadorAulas;

    // Construtor
    public Aluno(String nome, int idade, String curso, int capacidadeAulas) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.aulasAssistidas = new String[capacidadeAulas];
        this.contadorAulas = 0;
    }

    // Método para assistir aula
    public void assistindoAula(String aula) {
        if (contadorAulas < aulasAssistidas.length) {
            aulasAssistidas[contadorAulas] = aula;
            contadorAulas++;
            System.out.println("Você está assistindo a aula de: " + aula);
        } else {
            System.out.println("Você já assistiu ao número máximo de aulas.");
        }
    }

    // Método de cumprimento
    public void cumprimento(String nome) {
        LocalTime horaAtual = LocalTime.now();
        int hora = horaAtual.getHour();

        if (hora >= 6 && hora < 12) {
            System.out.println("Bom dia, " + nome + "!");
        } else if (hora >= 12 && hora < 18) {
            System.out.println("Boa tarde, " + nome + "!");
        } else {
            System.out.println("Boa noite, " + nome + "!");
        }
    }

    // Método para exibir a relação das aulas assistidas
    public String relacaoDasAulas() {
        if (contadorAulas == 0) {
            return "Você ainda não assistiu nenhuma aula.";
        }
        StringBuilder aulas = new StringBuilder("Aulas assistidas: ");
        for (int i = 0; i < contadorAulas; i++) {
            aulas.append(aulasAssistidas[i]);
            if (i < contadorAulas - 1) {
                aulas.append(", ");
            }
        }
        return aulas.toString();
    }

    // Getters e Setters
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }
}


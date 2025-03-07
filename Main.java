public class Main {
    public static void main(String[] args) {
        // Cria um objeto da classe Aluno
        Aluno aluno = new Aluno("Carlos", 20, "Engenharia de Software", 5);
        
        // Realiza a saudação para o aluno
        aluno.cumprimento(aluno.getNome());

        // O aluno assiste algumas aulas
        aluno.assistindoAula("Matemática Discreta");
        aluno.assistindoAula("Algoritmos");
        aluno.assistindoAula("Estruturas de Dados");

        // Exibe as aulas assistidas
        System.out.println(aluno.relacaoDasAulas());
    }
}

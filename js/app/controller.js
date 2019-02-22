angular.module("meuModulo")
.controller("indexController",function($scope){
    $scope.titulo = "Home";
    $scope.alunos = [
        {
            nome: "camila",
            email: "camila_ca@hotmail.com",
            nota1: 65,
            nota2: 80,
            nota3: 55
        },
        {
            nome: "joao",
            email: "joao@hotmail.com",
            nota1: 65,
            nota2: 80,
            nota3: 55
        },
        {
            nome: "julia",
            email: "julia@hotmail.com",
            nota1: 65,
            nota2: 80,
            nota3: 55
        },
    ];

    const init = () => {
        $scope.alunos.forEach(function(aluno){
            aluno.media = media(aluno);
        });
        limpaForm();
    };

    //const isValid = (nota) => nota === '' || nota === null || isNaN(nota)

    const media = (aluno) => {  
        let media = (parseFloat(aluno.nota1) + parseFloat(aluno.nota2) + parseFloat(aluno.nota3))/3;
            return media.toFixed(2);
    };
    
    $scope.abreAddAluno = function(){
        $scope.editando = false;
        limpaForm();
        $('#modal1').modal('open');
            
    };
    
    $scope.addAluno = function(Aluno){
        Aluno.media = media(Aluno);
        $scope.alunos.push(Aluno);
        $('#modal1').modal('close');
        limpaForm();
    };

    $scope.editando = false;
    let alunoEditar;

    $scope.editarAluno = function(Aluno) {
        $scope.editando = true;			
        angular.copy(Aluno,$scope.Aluno);
        $('#modal1').modal('open');
        alunoEditar = Aluno;	
    }

    $scope.salvarAluno = function(Aluno){
        alunoEditar.nome = Aluno.nome;
        alunoEditar.email = Aluno.email;
        alunoEditar.nota1 = Aluno.nota1;
        alunoEditar.nota2 = Aluno.nota2;
        alunoEditar.nota3 = Aluno.nota3;
        alunoEditar.media = media(Aluno);
        $('#modal1').modal('close');
    };

    $scope.deletarAluno = function(Aluno){
        for(let index in $scope.alunos){
            let aux = $scope.alunos[index];
            if (Aluno === aux) {
                $scope.alunos.splice(index,1);
            }
        }

    }

    const limpaForm = () => {
        $scope.Aluno = {nome: "", email: "",nota1: "",nota2: "",nota3: "", media: ""}
    }

    init();
})

.controller("contatoController",function($scope){
    $scope.titulo = "Contato"
})
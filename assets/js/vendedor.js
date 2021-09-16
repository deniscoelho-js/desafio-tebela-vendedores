class Vendedor {

    constructor(){
        this.arrayVendedor = [];
    }

    salvar(){
        let vendedor = this.lerDados();            
        this.adicionar(vendedor)

        console.log(this.arrayVendedor)
        this.listarVendedor();
    }

    listarVendedor(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayVendedor.length; i++){
            let tr = tbody.insertRow();

            let td_nome = tr.insertCell();
            let td_comissao = tr.insertCell();

            td_nome.innerHTML = this.arrayVendedor[i].nomeVendedor;
            td_comissao.innerHTML = this.arrayVendedor[i].comissaoFinal;
            
        }
    }

    lerDados(){
        let vendedor = {}

        vendedor.nomeVendedor = document.getElementById('nome').value;
        vendedor.comissaoFinal = parseFloat(document.getElementById('comissao').value)* 1.15 + parseFloat(document.getElementById('salario').value);

        return vendedor; 
    } 

    adicionar(vendedor){
        this.arrayVendedor.push(vendedor);
    }

    

}

var vendedor = new Vendedor(); 
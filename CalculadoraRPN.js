"use strict";
class PilaLIFO { 
    constructor (){ 
		this.pila = new Array();
		
    }
    apilar(valor){
		if(valor=='π'){
			var pi=Math.PI;
			document.getElementById('variables').value+=pi;
		} else if(valor!='x')
			document.getElementById('variables').value+=valor;
		else{
			var str;
			str=document.getElementById('variables').value;
			if(str!=""){
				this.pila.push(str);
				document.getElementById('variables').value="";
			}
		}
	}
	restar(){
		var valor;
		var x=this.pila.length;
		valor=this.pila[x-2]-this.pila[x-1];
		this.desapilar();
		this.desapilar();
		this.pila.push(valor);
	}
	multiplicar(){
		var valor;
		var x=this.pila.length;
		valor=this.pila[x-2]*this.pila[x-1];
		this.desapilar()
		this.desapilar()
		this.pila.push(valor);
	}
	dividir(){
		var valor;
		var x=this.pila.length;
		valor=this.pila[x-2]/this.pila[x-1];
		this.desapilar()
		this.desapilar()
		this.pila.push(valor);
	}
	cambiar(i,valor){
		var indice = parseInt(i);
		if ( (indice >= 0) && (indice < this.pila.length) )
			this.pila[i] = valor;	
	}
	sumar(){
		var valor;
		var x=this.pila.length;
		valor=Number(this.pila[x-2])+Number(this.pila[x-1]);
		this.desapilar();
		this.desapilar();
		this.pila.push(valor);
	}
    desapilar(){
        this.pila.pop();
    }
    mostrar(){
        var stringPila = "<ul>";
		var x=this.pila.length;
        for (var i in this.pila){
			stringPila += "<li>" + x + "............................." + this.pila[i] + "</li>";
			x--;
	    }
		stringPila += "</ul>"
        return stringPila;
    }
	factorial(){
		var y=this.pila.length;
		var x=Number(this.pila[y-1]);
		var i=0;
		var result=1;
		while(x!=i){
			result=result*(i+1);
			i++;
		}
		this.desapilar();
		this.pila.push(result);
	}
	vaciar(){
		while(this.pila.length!=0)
			this.pila.pop();
	}
	borrar(){
		document.getElementById('variables').value="";
	}
	sin(){
		var valor;
		var x=this.pila.length;
		valor=Math.sin(this.pila[x-1]);
		this.desapilar();
		this.pila.push(valor);
	}
	cos(){
		var valor;
		var x=this.pila.length;
		valor=Math.cos(this.pila[x-1]);
		this.desapilar();
		this.pila.push(valor);
	}
	tan(){
		var valor;
		var x=this.pila.length;
		valor=Math.tan(this.pila[x-1]);
		this.desapilar();
		this.pila.push(valor);
	}
	masYMenos(){
		var valor;
		var x=this.pila.length;
		valor=-(this.pila[x-1]);
		this.desapilar();
		this.pila.push(valor);
	}
	exp(){
		var valor;
		var x=this.pila.length;
		valor=Math.exp(this.pila[x-1]);
		this.desapilar();
		this.pila.push(valor);
	}
	log(){
		var valor;
		var x=this.pila.length;
		valor=Math.log(this.pila[x-1]);
		this.desapilar();
		this.pila.push(valor);
	}
	raiz(){
		var valor;
		var x=this.pila.length;
		valor=Math.sqrt(this.pila[x-1]);
		this.desapilar();
		this.pila.push(valor);
	}
	pow2(){
		var valor;
		var x=this.pila.length;
		valor=Math.pow(this.pila[x-1],2);
		this.desapilar();
		this.pila.push(valor);
	}
	pow(){
		var valor;
		var x=this.pila.length;
		valor=Math.pow(this.pila[x-2],this.pila[x-1]);
		this.desapilar();
		this.desapilar();
		this.pila.push(valor);
	}
	pow10(){
		var valor;
		var x=this.pila.length;
		valor=Math.pow(10,this.pila[x-1]);
		this.desapilar();
		this.pila.push(valor);
	}
}
var pila=new PilaLIFO();
    
function mostrar(mostrar) { 
    var mostrar = document.getElementById(mostrar); 
    if (mostrar.style.display === "none") {
      mostrar.style.display = "block";
    } else {
      mostrar.style.display = "none";
    }
  }
function calcular() { 
  var h = document.getElementById("hipotenusa").value;
	var a = document.getElementById("catetoa").value;
	var b = document.getElementById("catetob").value;
	var a2=a*a;
	var b2=b*b;
	var h2=h*h;
	var z = a*b*h;
	var resposta = false;
	var x, zh, za, zb = 0;
    if( z == 0)
    {
      if( a == 0)
      {
        z = h*b;
        if (z == 0)
        {
          alert("Erro: Apenas um dos lados pode ser 0.");
        }
        else
        {	
          z = b-h;
          if(z >= 0)
          {
            alert("Erro: A hipotenusa tem que ser maior que o cateto B.");
          }
          else
          {
            document.getElementById("operacoes").innerHTML ="h² = a² + b² <br>";
            document.getElementById("operacoes").innerHTML +=" "+h+"² = a² + " + b+"²<br>";
            document.getElementById("operacoes").innerHTML +=" "+h2+" = a² + " + b2+"<br>";
            document.getElementById("operacoes").innerHTML +="a² = "+h2+" - "+b2+"<br>";
            z = h2 - b2;
            document.getElementById("operacoes").innerHTML +="a² = "+z+"<br>";
            document.getElementById("operacoes").innerHTML +="a = &radic;("+z+")<br>";
            a = Math.sqrt(z);
            za = a.toFixed(2);
            document.getElementById("operacoes").innerHTML +="a &cong; "+za+"<br>";
            document.getElementById("catetoa").value = za;
            resposta = true;
          }
        }
      }
		else
		{
			if(b == 0)
				{
					if( h == 0)
					{
						alert("Erro: Apenas um dos lados pode ser 0.");
					}
					else
					{
						z = a - h; 
						if (0 <= z)
						{
							alert("A hipotenusa tem que ser maior que o cateto A.");
						}
						else
						{
							document.getElementById("operacoes").innerHTML ="h² = a² + b² <br>";
							document.getElementById("operacoes").innerHTML +=" "+h+" ² =  "+a+"² + b²";
							document.getElementById("operacoes").innerHTML +=" "+h2+" = "+a2+" + b²<br>";
							document.getElementById("operacoes").innerHTML +="b² = "+h2+" - "+a2+"<br>";
							z = h2 - a2;
							document.getElementById("operacoes").innerHTML +="b² = "+z+"<br>";
							b = Math.sqrt(z);
							document.getElementById("operacoes").innerHTML +="b = &radic;("+z+")<br>";
							zb = b.toFixed(2);
							document.getElementById("operacoes").innerHTML +="b &cong; "+zb+"<br>";
							document.getElementById("catetob").value = zb;
							resposta = true;
						}
					}
				}
			else
			{
				document.getElementById("operacoes").innerHTML ="h² = a² + b² <br>";
				document.getElementById("operacoes").innerHTML +="h² = "+a+"² + "+b+"²<br>";
				document.getElementById("operacoes").innerHTML +="h² = "+a2+" + "+b2+"<br>";
				z = a2 + b2;
				document.getElementById("operacoes").innerHTML +="h² = "+z+"<br>";
				document.getElementById("operacoes").innerHTML +="h = &radic;("+z+")<br>";
				h = Math.sqrt(z);
				zh = h.toFixed(2);
				document.getElementById("operacoes").innerHTML +="h &cong; "+zh+"<br>";
				document.getElementById("hipotenusa").value = zh;
				resposta = true;
			}
		}
  }
}
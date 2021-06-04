let a = Number(prompt("\nax^2 + bx + c = 0\n\n" + "Введите коэффицент a:"));
let b = Number(prompt("\nax^2 + bx + c = 0\n\n" + "Введите коэффицент b:"));
let c = Number(prompt("\nax^2 + bx + c = 0\n\n" + "Введите коэффицент c:"));

if ((isFinite(a) && isFinite(b) && isFinite(c)))
{
	if (a === 0 && b === 0) 
	{
		if (c === 0)
		{
			alert("\n0 = 0");
		} 
		else 
		{
			alert("\nНеверное равенство " + "\n\n" + c + " = 0");
		}
	}
	else if (a === 0)
	{
		let x;
		x = -c/b;
		x = Number(x.toFixed(2));
		alert(x);
	} 
	else 
	{
		let x1;
		let x2;
		let D;
		D = b**2 - 4 * a * c;
		if (D >= 0)
		{
			x1 = (-b + Math.sqrt(D))/2;
			x2 = (-b - Math.sqrt(D))/2;
			x1 = Number(x1.toFixed(2));
			x2 = Number(x2.toFixed(2));
		}
		else
		{
			x1 = -b/2;
			x2 = -b/2;
			x1 = String(x1.toFixed(2));
			x2 = String(x2.toFixed(2));
			x1 += ' ' + '+';
			x2 += ' ' + '-';
			D = Math.sqrt(-D)/2;
			D = String(D.toFixed(2));
			D += 'i';
			x1 += ' ' + D;
			x2 += ' ' + D;
		}
		if (x1 != x2)
		{
			alert("\nПервый корень = " + x1 + "\n\n" + "Второй корень = " + x2);
		}
		else alert("\nОба корня равны " + x1);
		
	}
}
else
{
	alert("\nВведены неверные значения");
}

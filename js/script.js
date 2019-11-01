var myCell = document.getElementById('container');
var cells = new Array(
	'A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8',
	'A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7',
	'A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6',
	'A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5',
	'A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4',
	'A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3',
	'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2',
	'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1'
);
var letter = new Array(' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ' ');
var count = 0;

//функция определения всевозможных ходов конем из заданной позиции id
function Position(id) {
	//буква из названия ячейки
	var col = id.charAt(0);
	//цифра из названия ячейки
	var row = id.charAt(1);
	//строка для результата	
	var res = "";
	var resRow;
	var resCol;
	var resArr = new Array();
	row = parseInt(row);
	//преобразуем букву col в цифру
	switch(col) {
		case 'A':
			col = 1;
			break;
		case 'B':
			col = 2;
			break;
		case 'C':
			col = 3;
			break;
		case 'D':
			col = 4;
			break;
		case 'E':
			col = 5;
			break;
		case 'F':
			col = 6;
			break;
		case 'G':
			col = 7;
			break;
		case 'H':
			col = 8;
			break;
		default:
			alert('Некорректный ввод!');
			break;
	}
	//находим всевозможные позиции, куда конь может попасть из заданной ячейки
	for(var x = -2; x <= 2; x++)
		for(var y = -2; y <= 2; y++)
		{
			if((x != y) && (x != -y) && (x != 0) && (y != 0) && (col + x >= 1) && (col + x <= 8) && (row + y >= 1) && (row + y <= 8))
			{
				resCol = col + x;
				switch(resCol) {
					case 1:
						resCol = 'A';
						break;
					case 2:
						resCol = 'B';
						break;
					case 3:
						resCol = 'C';
						break;
					case 4:
						resCol = 'D';
						break;
					case 5:
						resCol = 'E';
						break;
					case 6:
						resCol = 'F';
						break;
					case 7:
						resCol = 'G';
						break;
					case 8:
						resCol = 'H';
						break;
					default:
						break;
				}
				resRow = row + y;
				res = resCol + resRow;
				//добавляем результат в массив
				resArr.push(res);
			}
		}
	//возвращаем результат
	return resArr;		
}

//идем по всем столбцам первой строки и печатаем буквы из массива letter
for(var i = 0; i < 10; i++)
{
	var numberTop = document.createElement('div');
	numberTop.id = i;
	numberTop.dataset.view = "cell";
	var textTop = document.createTextNode(letter[i]);
	numberTop.appendChild(textTop);
	myCell.appendChild(numberTop);
}

//идем по каждой из восьми строк
for(var l = 8; l > 0; l--)
{
	//в первом столбце печатаем цифру, соответствующую номеру строки (нумерация в обратном порядке)
	var numberLeft = document.createElement('div');
	numberLeft.id = l;
	numberLeft.dataset.view = "cell";
	var textLeft = document.createTextNode(l);
	numberLeft.appendChild(textLeft);
	myCell.appendChild(numberLeft);

	//для каждой ячейки строки
	for(var i = 0; i < 8; i++) {
		//рисуем ячейку
		cell = document.createElement('div');
		cell.id = cells[count];
		cell.dataset.view = "cell";
		myCell.appendChild(cell);
		
		count++;
  
		//при нажатии на ячейку
		cell.onclick = function () {
			var b = document.querySelectorAll('div');
			//все ячейки окрашиваются в исходный цвет
			for(var j = 0; j < b.length; j++)
			{
				b[j].style.backgroundColor = '';
			}
			//нажатая ячейка окрашивается в синий цвет
			this.style.backgroundColor = 'blue';
		
			//находим все ячейки, куда может пойти конь из нажатой ячейки
			var res = Position(this.id);
		
			//все эти ячейки окрашиваются в зеленый цвет
			for(var k = 0; k < res.length; k++)
			{
				for(var m = 0; m < cells.length; m++)
				{
					if(res[k] == cells[m])
					{
						var el = document.getElementById(cells[m]);
						el.style.backgroundColor = '#32CD32';
					}
				}
			}
		}	
	}
	
	//в последнем столбце печатаем цифру, соответствующую номеру строки (нумерация в обратном порядке)
	var numberRight = document.createElement('div');
	numberRight.id = l;
	numberRight.dataset.view = "cell";
	var textRight = document.createTextNode(l);
	numberRight.appendChild(textRight);
	myCell.appendChild(numberRight);
}

//идем по всем столбцам последней строки и печатаем буквы из массива letter
for(var i = 0; i < 10; i++)
{
	var numberBottom = document.createElement('div');
	numberBottom.id = i;
	numberBottom.dataset.view = "cell";
	var textBottom = document.createTextNode(letter[i]);
	numberBottom.appendChild(textBottom);
	myCell.appendChild(numberBottom);
}
var currentOperations = {
    'expenses':[],
    'income':[]
};
var operations = {
    'expenses':[],
    'income':[]
};
var operationTitle;
var operationType;
var operationAmount;
var operation = {};
var visible;
var totalExpenses = 0;
var totalIncome = 0;
var totalBalance = 0;
var display = ``;


currentOperations = JSON.parse(localStorage.getItem('operations'));

visible = false;

function getValues()
{
    operationTitle = document.getElementById('title-input').value ;
    operationType = document.getElementById('type-input').value ;
    operationAmount = document.getElementById('amount-input').value ;
    operation = {"title":operationTitle,"type":operationType,"amount":Number(operationAmount)};
}

function getCurrentOperations()
{
    totalBalance = 0;
    totalIncome = 0;
    totalExpenses = 0;
    
    for(i = 0 ; i < currentOperations.expenses?.length ; i++)
    {
        totalExpenses += currentOperations.expenses[i].amount;
        display += `
        <tr>
        <td>${currentOperations.expenses[i].title}</td>
        <td>Expense</td>
        <td>$${currentOperations.expenses[i].amount}</td>
    </tr>
        `;
    }
    for(i = 0 ; i < currentOperations.income?.length ; i++)
    {
        totalIncome += currentOperations.income[i].amount;
        display += `
        <tr>
        <td>${currentOperations.income[i].title}</td>
        <td>Income</td>
        <td>$${currentOperations.income[i].amount}</td>
    </tr>
        `;
    }
    totalBalance = (totalIncome - totalExpenses);
    document.getElementById('table').innerHTML = display;
    document.getElementById('balance').innerHTML = `
    <h2>$${totalBalance}</h2>
    <p>Total Balance</p>
    `;
    display = ``;
}

getCurrentOperations();

function setCurrentOperations()
{
    localStorage.setItem('operations', JSON.stringify(operations));
}

function setDisplay(display)
{
    if(display == 'none')
    {
        document.getElementById('title-input').style.display = 'none';
        document.getElementById('type-input').style.display = 'none';
        document.getElementById('amount-input').style.display = 'none';
        visible = false;
    }else
    {
        document.getElementById('title-input').style.display = 'inline-block';
        document.getElementById('type-input').style.display = 'inline-block';
        document.getElementById('amount-input').style.display = 'inline-block';
        visible = true;
    }
}

function addOperation()
{
    getValues()
    if(operationTitle == '' && visible == false)
    {
        setDisplay();
    }
    else if (operationTitle == '' && visible == true)
    {
        setDisplay('none');
        visible = false;
    }
    else{
        if(localStorage.getItem('operations'))
        {
            operations = currentOperations;
            if(operationType == 'income')
            {
                document.getElementById('no-balance').style.display = "none";
                document.getElementById('balance').style.display = "block";
                operations.income.push(operation);
            } else if(operationType == 'expense' && operationAmount > totalBalance)
            {
                document.getElementById('balance').style.display = "none";
                document.getElementById('no-balance').style.display = "block";
                document.getElementById('no-balance').innerHTML = ` <h2>$${totalBalance}</h2><p>NO Sufficient Balance!</p>`
            }
            else
            {
                document.getElementById('no-balance').style.display = "none";
                document.getElementById('balance').style.display = "block";
                operations.expenses.push(operation);
            }
            setCurrentOperations();
            operation = {};
            getCurrentOperations();
        }else
        {
            if(operationType == 'income')
            {
                document.getElementById('no-balance').style.display = "none";
                document.getElementById('balance').style.display = "block";
                operations.income.push(operation);
            } else if(operationType == 'expense' && operationAmount > totalBalance)
            {
                document.getElementById('balance').style.display = "none";
                document.getElementById('no-balance').style.display = "block";
                document.getElementById('no-balance').innerHTML = ` <h2>$${totalBalance}</h2><p>NO Sufficient Balance!</p>`
            }
            else
            {
                document.getElementById('no-balance').style.display = "none";
                document.getElementById('balance').style.display = "block";
                operations.expenses.push(operation);
            }
            currentOperations = operations;
            setCurrentOperations();
            operation = {};
            getCurrentOperations();
        }
    
    }
}
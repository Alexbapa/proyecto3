let temperatura = 0;
let temperatura1 = 0;
let temperatura2 = 0;

 const labels = [
    '',
    '',
    '',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Comparar temperaturas',
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 0, 0],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
    }
  };

async function go(){
    let ciudad = document.getElementById("search");
     let ciudad1 = document.getElementById("search1");
     let ciudad2 = document.getElementById("search2");
    
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+ciudad.value+"&appid=616629f9acdc3b22b8b09553e632e5da&units=metric"
    const respuesta = await fetch(url);
    const respuestados = await respuesta.json();
    temperatura = respuestados.main.temp;
    
     let url1 = "https://api.openweathermap.org/data/2.5/weather?q="+ciudad1.value+"&appid=616629f9acdc3b22b8b09553e632e5da&units=metric"
     const respuesta1 = await fetch(url1);
     const respuesta1dos = await respuesta1.json();
     temperatura1 = respuesta1dos.main.temp;
    
      let url2 = "https://api.openweathermap.org/data/2.5/weather?q="+ciudad2.value+"&appid=616629f9acdc3b22b8b09553e632e5da&units=metric"
      const respuesta2 = await fetch(url2);
      const respuesta2dos = await respuesta2.json();
      temperatura2 = respuesta2dos.main.temp;
    
    data.datasets[0].data[0] = temperatura;
     data.datasets[0].data[1] = temperatura1;
      data.datasets[0].data[2] = temperatura2;
    
    labels[0] = ciudad.value;
     labels[1] = ciudad1.value;
     labels[2] = ciudad2.value;
    
      const myChart = new Chart(
       document.getElementById('myChart'),
       config
  );
    

 }

 

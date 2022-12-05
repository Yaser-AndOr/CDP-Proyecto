let rpm = 0;
let mate = new Object();
mate.m = [0,0,0,0,0,0,0];
mate.e = [0,0,0,0,0,0,0];
mate.ma = [0,0,0,0,0,0,0];
let   m =[ 0.004,0.002,0.005,0.119,0.049,0.001]
        r11= 0.008,
        r21= 0.0015,
        r31= 0.005,
        r41= 0.0025,
        r51= 0.0127,
        r61= 0.0115,
        r32=0.0015,
        r52=0.0025;

window.onload=off;

function velocidad(old){ 
            calculos();
            document.getElementById("rotador1").style.animation = `rotores ${1/rpm}s linear infinite`;
            document.getElementById("rotador2").style.animation = `rotores ${1/rpm}s linear infinite`;
            document.getElementById("rotador3").style.animation = `rotores ${1/rpm}s linear infinite`;
            document.getElementById("rotador4").style.animation = `rotores ${1/rpm}s linear infinite`;
            document.getElementById("rotador5").style.animation = `rotores ${1/rpm}s linear infinite`;
            document.getElementById("rotador6").style.animation = `rotores ${1/rpm}s linear infinite`;
}

function wrvAng(){
    let text = `RPM: ${rpm}<p>Velocidad Angular: ${Math.trunc(mate.vang)} Rad/s<p>Desplazamiento angular: ${Math.trunc(mate.w)} Kg*m^2/s`
    document.getElementById("vangular").innerHTML = text;
}
function wrMI(){
    let text = `Esmeril: ${mate.m[0]} Kgm^2<p>Eje Esmeril: ${mate.m[1]} Kgm^2
    <p>Sujetador: ${mate.m[2]} Kgm^2<p>Eje Central: ${mate.m[3]} Kgm^2
    <p>Bobina: ${mate.m[4]} Kgm^2<p>Masas: ${mate.m[5]} Kgm^2<p>Sistema: ${mate.m[6]} Kgm^2`
    document.getElementById("inercia").innerHTML = text;
}
function wrECR(){
    let text = `Esmeril: ${mate.e[0]} J<p>Eje Esmeril: ${mate.e[1]} J
    <p>Sujetador: ${mate.e[2]} J<p>Eje Central: ${mate.e[3]} J
    <p>Bobina: ${mate.e[4]} J<p>Masas: ${mate.e[5]} J<p>Sistema: ${mate.e[6]} J`
    document.getElementById("cinetica").innerHTML = text;
}
function wrMA(){
    let text = `Esmeril: ${mate.ma[0]} Kgm^2/s<p>Eje Esmeril: ${mate.ma[1]} Kgm^2/s
    <p>Sujetador: ${mate.ma[2]} Kgm^2/s<p>Eje Central: ${mate.ma[3]} Kgm^2/s
    <p>Bobina: ${mate.ma[4]} Kgm^2/s<p>Masas: ${mate.ma[5]} Kgm^2/s<p>Sistema: ${mate.ma[6]} Kgm^2/s`
    document.getElementById("momento").innerHTML = text;
}

function calculos(){
    mate.vang = 2*Math.PI*rpm/60;
    mate.w = Math.sqrt(2*mate.vang*(rpm*2*3.1416));
    wrvAng();
    mate.m[0] = m[0]*(Math.pow(r11,2))/2;
    mate.m[1] = m[1]*(Math.pow(r21,2))/2;
    mate.m[2] = m[2]*(Math.pow(r31,2)+Math.pow(r32,2))/2;
    mate.m[3] = m[3]*(Math.pow(r41,2))/2;
    mate.m[4] = m[4]*(Math.pow(r51,2)+Math.pow(r52,2))/2;
    mate.m[5] = 8*m[5]*(Math.pow(r61,2));
    mate.m[6] = mate.m[0]+mate.m[1]+mate.m[2]+mate.m[3]+mate.m[4]+mate.m[5];
    wrMI();
    for (let x = 0; x < 6; x++) {
        mate.e[x] = mate.m[x]*(Math.pow(mate.vang,2))/2;   
    }
    mate.e[6] = mate.e[0]+mate.e[1]+mate.e[2]+mate.e[3]+mate.e[4]+mate.e[5];
    wrECR();
    for (let x = 0; x < 6; x++) {
        mate.ma[x] = mate.m[x]*mate.vang;
    }
    mate.ma[6] = mate.ma[0]+mate.ma[1]+mate.ma[2]+mate.ma[3]+mate.ma[4]+mate.ma[5];
    wrMA();
}

function off(){
    rpm = 0;
    calculos();
    document.getElementById("rotador1").style.animation = `rotores ${rpm}s linear infinite`;
    document.getElementById("rotador2").style.animation = `rotores ${rpm}s linear infinite`;
    document.getElementById("rotador3").style.animation = `rotores ${rpm}s linear infinite`;
    document.getElementById("rotador4").style.animation = `rotores ${rpm}s linear infinite`;
    document.getElementById("rotador5").style.animation = `rotores ${rpm}s linear infinite`;
    document.getElementById("rotador6").style.animation = `rotores ${rpm}s linear infinite`;
    mate.m = [0,0,0,0,0,0,0];
    wrMI();
}
function v1(){
    let old = rpm;
    rpm = 14000;
    velocidad(old);
}
function v2(){
    let old = rpm;
    rpm = 19000;
    velocidad(old);
}
function v3(){
    let old = rpm;
    rpm = 23000;
    velocidad(old);
}
function v4(){
    let old = rpm;
    rpm = 28000;
    velocidad(old);
}
function v5(){
    let old = rpm;
    rpm = 33000;
    velocidad(old);
}

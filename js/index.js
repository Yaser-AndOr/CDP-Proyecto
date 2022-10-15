let rpm = 0;
let mate = new Object();
const   m1= 0.004,
        m2= 0.002,
        m3= 0.005,
        m4= 0.119,
        m5= 0.049,
        m6= 0.001;
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
    let text = `RPM: ${rpm}<p>Velocidad Angular: ${Math.trunc(mate.vang)}`
    document.getElementById("vangular").innerHTML = text;
}
function wrMI(){
    let text = `Esmeril: ${mate.mie} Kgm^2<p>Eje Esmeril: ${mate.miee} Kgm^2
    <p>Sujetador: ${mate.mis} Kgm^2<p>Eje Central: ${mate.miec} Kgm^2
    <p>Bobina: ${mate.mib} Kgm^2<p>Masas: ${mate.miem} Kgm^2<p>Sistema: ${mate.miss} Kgm^2`
    document.getElementById("inercia").innerHTML = text;
}
function wrECR(){
    let text = `Esmeril: ${mate.ecre} J<p>Eje Esmeril: ${mate.ecree} J
    <p>Sujetador: ${mate.ecrs} J<p>Eje Central: ${mate.ecrec} J
    <p>Bobina: ${mate.ecrb} J<p>Masas: ${mate.ecrem} J<p>Sistema: ${mate.ecrss} J`
    document.getElementById("cinetica").innerHTML = text;
}
function wrMA(){
    let text = `Esmeril: ${mate.mae} Kgm^2/s<p>Eje Esmeril: ${mate.maee} Kgm^2/s
    <p>Sujetador: ${mate.mas} Kgm^2/s<p>Eje Central: ${mate.maec} Kgm^2/s
    <p>Bobina: ${mate.mab} Kgm^2/s<p>Masas: ${mate.maem} Kgm^2/s<p>Sistema: ${mate.mass} Kgm^2/s`
    document.getElementById("momento").innerHTML = text;
}

function calculos(){
    mate.vang = 2*Math.PI*rpm/60;
    wrvAng();
    mate.mie = m1*(Math.pow(r11,2))/2;
    mate.miee = m2*(Math.pow(r21,2))/2;
    mate.mis = m3*(Math.pow(r31,2)+Math.pow(r32,2))/2;
    mate.miec = m4*(Math.pow(r41,2))/2;
    mate.mib = m5*(Math.pow(r51,2)+Math.pow(r52,2))/2;
    mate.miem = 8*m6*(Math.pow(r61,2));
    mate.miss = mate.mie+mate.miee+mate.mis+mate.miec+mate.mib+mate.miem;
    wrMI();
    mate.ecre = mate.mie*(Math.pow(mate.vang,2))/2;
    mate.ecree = mate.miee*(Math.pow(mate.vang,2))/2;
    mate.ecrs = mate.mis*(Math.pow(mate.vang,2))/2;
    mate.ecrec = mate.miec*(Math.pow(mate.vang,2))/2;
    mate.ecrb = mate.mib*(Math.pow(mate.vang,2))/2;
    mate.ecrem = mate.miem*(Math.pow(mate.vang,2))/2;
    mate.ecrss = mate.ecre+mate.ecree+mate.ecrs+mate.ecrec+mate.ecrb+mate.ecrem;
    wrECR();
    mate.mae = mate.mie*mate.vang;
    mate.maee = mate.miee*mate.vang;
    mate.mas = mate.mis*mate.vang;
    mate.maec = mate.miec*mate.vang;
    mate.mab = mate.mib*mate.vang;
    mate.maem = mate.miem*mate.vang;
    mate.mass = mate.mae+mate.maee+mate.mas+mate.maec+mate.mab+mate.maem;
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
    mate.mie = 0;
    mate.miee = 0;
    mate.mis = 0;
    mate.miec = 0;
    mate.mib = 0;
    mate.miem = 0;
    mate.miss = mate.mie+mate.miee+mate.mis+mate.miec+mate.mib+mate.miem;
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

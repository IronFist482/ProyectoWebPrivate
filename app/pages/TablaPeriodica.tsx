import HeaderGeneral from './HeaderGeneral'
import Menu from "./Menu"
import React,{useState} from 'react'
import styles from '../styles/TablaPeriodica.module.css'

export default function TablaPeriodica(){
  
  const [numero,setNumero] = useState("")
  const [elemento,setElemento] = useState("")
  const [peso,setPeso] = useState("")
  const [electronegatividad,setElectronegatividad] = useState("")
  const [nombre,setNombre] = useState("")
  const [periodo,setPeriodo] = useState("")
  const [grupo,setGrupo] = useState("")
  const [background,setBackgrund] = useState("")
  const colors = [
    "#993030",
    "#a54f2e",
    "#808027",
    "#5d7526",
    "#1a6d44",
    "#1a6d69",
    "#1a556d",
    "#1a346d",
    "#531a6d",
    "#860246"
  ]

  const uno = () => {
    setNumero("1")
    setElemento("H")
    setPeso("1.007")
    setElectronegatividad("(2.1)")
    setNombre("Hidrogeno")
    setPeriodo("1")
    setGrupo("1")
    setBackgrund(colors[0])
  }
  const dos = () => {
    setNumero("2")
    setElemento("He")
    setPeso("4.002")
    setElectronegatividad("")
    setNombre("Helio")
    setPeriodo("1")
    setGrupo("18")
    setBackgrund(colors[8])
  }
  const tres = () => {
    setNumero("3")
    setElemento("Li")
    setPeso("6.94")
    setElectronegatividad("(1.0)")
    setNombre("Litio")
    setPeriodo("2")
    setGrupo("1")
    setBackgrund(colors[0])
  }
  const cuatro = () => {
    setNumero("4")
    setElemento("Be")
    setPeso("9.012")
    setElectronegatividad("(1.5)")
    setNombre("Berilio")
    setPeriodo("2")
    setGrupo("2")
    setBackgrund(colors[1])
  }
  const cinco = () => {
    setNumero("5")
    setElemento("B")
    setPeso("10.811")
    setElectronegatividad("(2.0)")
    setNombre("Boro")
    setPeriodo("2")
    setGrupo("13")
    setBackgrund(colors[3])
  }
  const seis = () => {
    setNumero("6")
    setElemento("C")
    setPeso("12.011")
    setElectronegatividad("(2.5)")
    setNombre("Carbono")
    setPeriodo("2")
    setGrupo("14")
    setBackgrund(colors[4])
  }
  const siete = () => {
    setNumero("7")
    setElemento("N")
    setPeso("14.007")
    setElectronegatividad("(3.0)")
    setNombre("Nitrógeno")
    setPeriodo("2")
    setGrupo("15")
    setBackgrund(colors[5])
  }
  const ocho = () => {
    setNumero("8")
    setElemento("O")
    setPeso("15.999")
    setElectronegatividad("(3.5)")
    setNombre("Oxígeno")
    setPeriodo("2")
    setGrupo("16")
    setBackgrund(colors[6])
  }
  const nueve = () => {
    setNumero("9")
    setElemento("F")
    setPeso("18.998")
    setElectronegatividad("(4.0)")
    setNombre("Flúor")
    setPeriodo("2")
    setGrupo("17")
    setBackgrund(colors[7])
  }
  const diez = () => {
    setNumero("10")
    setElemento("Ne")
    setPeso("20.180")
    setElectronegatividad("")
    setNombre("Neón")
    setPeriodo("2")
    setGrupo("18")
    setBackgrund(colors[8])
  }
  const once = () => {
    setNumero("11")
    setElemento("Na")
    setPeso("22.990")
    setElectronegatividad("(0.9)")
    setNombre("Sodio")
    setPeriodo("3")
    setGrupo("1")
    setBackgrund(colors[0])
  }
  const doce = () => {
    setNumero("12")
    setElemento("Mg")
    setPeso("24.305")
    setElectronegatividad("(1.2)")
    setNombre("Magnesio")
    setPeriodo("3")
    setGrupo("2")
    setBackgrund(colors[1])
  }
  const trece = () => {
    setNumero("13")
    setElemento("Al")
    setPeso("26.981")
    setElectronegatividad("(1.5)")
    setNombre("Aluminio")
    setPeriodo("3")
    setGrupo("13")
    setBackgrund(colors[3])
  }
  const catorce = () => {
    setNumero("14")
    setElemento("Si")
    setPeso("28.085")
    setElectronegatividad("(1.8)")
    setNombre("Silicio")
    setPeriodo("3")
    setGrupo("14")
    setBackgrund(colors[4])
  }
  const quince = () => {
    setNumero("15")
    setElemento("P")
    setPeso("30.974")
    setElectronegatividad("(2.1)")
    setNombre("Fósforo")
    setPeriodo("3")
    setGrupo("15")
    setBackgrund(colors[5])
  }
  const dseis = () => {
    setNumero("16")
    setElemento("S")
    setPeso("32.065")
    setElectronegatividad("(2.5)")
    setNombre("Azufre")
    setPeriodo("3")
    setGrupo("16")
    setBackgrund(colors[6])
  }
  const dsiete = () => {
    setNumero("17")
    setElemento("Cl")
    setPeso("35.45")
    setElectronegatividad("(3.0)")
    setNombre("Cloro")
    setPeriodo("3")
    setGrupo("17")
    setBackgrund(colors[7])
  }
  const docho = () => {
    setNumero("18")
    setElemento("Ar")
    setPeso("39.948")
    setElectronegatividad("")
    setNombre("Argón")
    setPeriodo("3")
    setGrupo("18")
    setBackgrund(colors[8])
  }
  const dnueve = () => {
    setNumero("19")
    setElemento("K")
    setPeso("39.098")
    setElectronegatividad("(0.8)")
    setNombre("Potasio")
    setPeriodo("4")
    setGrupo("1")
    setBackgrund(colors[0])
  }
  const veinte = () => {
    setNumero("20")
    setElemento("Ca")
    setPeso("40.078")
    setElectronegatividad("(1.0)")
    setNombre("Calcio")
    setPeriodo("4")
    setGrupo("2")
    setBackgrund(colors[1])
  }
  const vuno = () => {
    setNumero("21")
    setElemento("Sc")
    setPeso("44.956")
    setElectronegatividad("(1.3)")
    setNombre("Escandio")
    setPeriodo("4")
    setGrupo("3")
    setBackgrund(colors[2])
  }
  const vdos = () => {
    setNumero("22")
    setElemento("Ti")
    setPeso("47.867")
    setElectronegatividad("1.5")
    setNombre("Titanio")
    setPeriodo("4")
    setGrupo("4")
    setBackgrund(colors[2])
  }
  const vtres = () => {
    setNumero("23")
    setElemento("V")
    setPeso("50.942")
    setElectronegatividad("(1.6)")
    setNombre("Vanadio")
    setPeriodo("4")
    setGrupo("5")
    setBackgrund(colors[2])
  }
  const vcuatro = () => {
    setNumero("24")
    setElemento("Cr")
    setPeso("51.996")
    setElectronegatividad("(1.6)")
    setNombre("Cromo")
    setPeriodo("4")
    setGrupo("6")
    setBackgrund(colors[2])
  }
  const vcinco = () => {
    setNumero("25")
    setElemento("Mn")
    setPeso("54.938")
    setElectronegatividad("(1.5)")
    setNombre("Manganeso")
    setPeriodo("4")
    setGrupo("7")
    setBackgrund(colors[2])
  }
  const vseis = () => {
    setNumero("26")
    setElemento("Fe")
    setPeso("55.845")
    setElectronegatividad("(1.8)")
    setNombre("Hierro")
    setPeriodo("4")
    setGrupo("8")
    setBackgrund(colors[2])
  }
  const vsiete = () => {
    setNumero("27")
    setElemento("Co")
    setPeso("58.933")
    setElectronegatividad("(1.9)")
    setNombre("Cobalto")
    setPeriodo("4")
    setGrupo("9")
    setBackgrund(colors[2])
  }
  const vocho = () => {
    setNumero("28")
    setElemento("Ni")
    setPeso("58.693")
    setElectronegatividad("(1.8)")
    setNombre("Niquel")
    setPeriodo("4")
    setGrupo("10")
    setBackgrund(colors[2])
  }
  const vnueve = () => {
    setNumero("29")
    setElemento("Cu")
    setPeso("63.546")
    setElectronegatividad("(1.9)")
    setNombre("Cobre")
    setPeriodo("4")
    setGrupo("11")
    setBackgrund(colors[2])    
  }
  const treinta = () => {
    setNumero("30")
    setElemento("Zn")
    setPeso("65.38")
    setElectronegatividad("(1.6)")
    setNombre("Zinc")
    setPeriodo("4")
    setGrupo("12")
    setBackgrund(colors[2])
  }
  const tuno = () => {
    setNumero("31")
    setElemento("Ga")
    setPeso("69.723")
    setElectronegatividad("(1.6)")
    setNombre("Galio")
    setPeriodo("4")
    setGrupo("13")
    setBackgrund(colors[3])
  }
  const tdos = () => {
    setNumero("32")
    setElemento("Ge")
    setPeso("72.63")
    setElectronegatividad("(1.8)")
    setNombre("Germanio")
    setPeriodo("4")
    setGrupo("14")
    setBackgrund(colors[4])
  }
  const ttres = () => {
    setNumero("33")
    setElemento("As")
    setPeso("74.922")
    setElectronegatividad("(2.0)")
    setNombre("Arsénico")
    setPeriodo("4")
    setGrupo("15")
    setBackgrund(colors[5])
  }
  const tcuatro = () => {
    setNumero("34")
    setElemento("Se")
    setPeso("78.971")
    setElectronegatividad("(2.4)")
    setNombre("Selenio")
    setPeriodo("4")
    setGrupo("16")
    setBackgrund(colors[6])
  }
  const tcinco = () => {
    setNumero("35")
    setElemento("Br")
    setPeso("79.904")
    setElectronegatividad("(2.8)")
    setNombre("Bromo")
    setPeriodo("4")
    setGrupo("17")
    setBackgrund(colors[7])
    
  }
  const tseis = () => {
    setNumero("36")
    setElemento("Kr")
    setPeso("83.798")
    setElectronegatividad("(3.0)")
    setNombre("Kriptón")
    setPeriodo("4")
    setGrupo("18")
    setBackgrund(colors[8])
  }
  const tsiete = () => {
    setNumero("37")
    setElemento("Rb")
    setPeso("85.468")
    setElectronegatividad("(0.8)")
    setNombre("Rubidio")
    setPeriodo("5")
    setGrupo("1")
    setBackgrund(colors[0])
  }
  const tocho = () => {
    setNumero("38")
    setElemento("Sr")
    setPeso("87.62")
    setElectronegatividad("(1.0)")
    setNombre("Estroncio")
    setPeriodo("5")
    setGrupo("2")
    setBackgrund(colors[1])
  }
  const tnueve = () => {
    setNumero("39")
    setElemento("Y")
    setPeso("88.906")
    setElectronegatividad("(1.2)")
    setNombre("Itrio")
    setPeriodo("5")
    setGrupo("3")
    setBackgrund(colors[2])
  }
  const cuarenta = () => {
    setNumero("40")
    setElemento("Zr")
    setPeso("91.224")
    setElectronegatividad("(1.4)")
    setNombre("Zirconio")
    setPeriodo("5")
    setGrupo("4")
    setBackgrund(colors[2])
  }
  const cuno = () => {
    setNumero("41")
    setElemento("Nb")
    setPeso("92.906")
    setElectronegatividad("(1.5)")
    setNombre("Niobio")
    setPeriodo("5")
    setGrupo("5")
    setBackgrund(colors[2])
  }
  const cdos = () => {
    setNumero("42")
    setElemento("Mo")
    setPeso("95.95")
    setElectronegatividad("(1.8)")
    setNombre("Molibdeno")
    setPeriodo("5")
    setGrupo("6")
    setBackgrund(colors[2])
  }
  const ctres = () => {
    setNumero("43")
    setElemento("Tc")
    setPeso("97.907")
    setElectronegatividad("(1.9)")
    setNombre("Tecnecio")
    setPeriodo("5")
    setGrupo("7")
    setBackgrund(colors[2])
  }
  const ccuatro = () => {
    setNumero("44")
    setElemento("Ru")
    setPeso("101.07")
    setElectronegatividad("(2.2)")
    setNombre("Rutenio")
    setPeriodo("5")
    setGrupo("8")
    setBackgrund(colors[2])
  }
  const ccinco = () => {
    setNumero("45")
    setElemento("Rh")
    setPeso("102.91")
    setElectronegatividad("(2.2)")
    setNombre("Rodio")
    setPeriodo("5")
    setGrupo("9")
    setBackgrund(colors[2])
  }
  const cseis = () => {
    setNumero("46")
    setElemento("Pd")
    setPeso("106.42")
    setElectronegatividad("(2.2)")
    setNombre("Paladio")
    setPeriodo("5")
    setGrupo("10")
    setBackgrund(colors[2])
  }
  const csiete = () => {
    setNumero("47")
    setElemento("Ag")
    setPeso("112.87")
    setElectronegatividad("(1.9)")
    setNombre("Plata")
    setPeriodo("5")
    setGrupo("11")
    setBackgrund(colors[2])
  }
  const cocho = () => {
    setNumero("48")
    setElemento("Cd")
    setPeso("112.41")
    setElectronegatividad("(1.7)")
    setNombre("Cadmio")
    setPeriodo("5")
    setGrupo("12")
    setBackgrund(colors[2])
  }
  const cnueve = () => {
    setNumero("49")
    setElemento("In")
    setPeso("114.82")
    setElectronegatividad("(1.7)")
    setNombre("Indio")
    setPeriodo("5")
    setGrupo("13")
    setBackgrund(colors[3])
  }
  const cincuenta = () => {
    setNumero("50")
    setElemento("Sn")
    setPeso("118.71")
    setElectronegatividad("(1.8)")
    setNombre("Estaño")
    setPeriodo("5")
    setGrupo("14")
    setBackgrund(colors[4])
  }
  const ciuno = () => {
    setNumero("51")
    setElemento("Sb")
    setPeso("121.76")
    setElectronegatividad("(1.9)")
    setNombre("Antimonio")
    setPeriodo("5")
    setGrupo("15")
    setBackgrund(colors[5])
  }
  const cidos = () => {
    setNumero("52")
    setElemento("Te")
    setPeso("127.60")
    setElectronegatividad("(2.1)")
    setNombre("Telurio")
    setPeriodo("5")
    setGrupo("16")
    setBackgrund(colors[6])
  }
  const citres = () => {
    setNumero("53")
    setElemento("I")
    setPeso("126.90")
    setElectronegatividad("131.29")
    setNombre("Yodo")
    setPeriodo("5")
    setGrupo("17")
    setBackgrund(colors[7])
  }
  const cicuatro = () => {
    setNumero("54")
    setElemento("Xe")
    setPeso("131.29")
    setElectronegatividad("(2.6)")
    setNombre("Xenón")
    setPeriodo("5")
    setGrupo("18")
    setBackgrund(colors[8])
  }
  const cicinco = () => {
    setNumero("55")
    setElemento("Cs")
    setPeso("132.91")
    setElectronegatividad("(0.7)")
    setNombre("Cesio")
    setPeriodo("6")
    setGrupo("1")
    setBackgrund(colors[0])
  }
  const ciseis = () => {
    setNumero("56")
    setElemento("Ba")
    setPeso("137.33")
    setElectronegatividad("(0.9)")
    setNombre("Bario")
    setPeriodo("6")
    setGrupo("2")
    setBackgrund(colors[1])
  }
  const cisiete = () => {
    setNumero("57")
    setElemento("La")
    setPeso("138.91")
    setElectronegatividad("")
    setNombre("Lantano")
    setPeriodo("6")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const ciocho = () => {
    setNumero("58")
    setElemento("Ce")
    setPeso("140.12")
    setElectronegatividad("")
    setNombre("Cerio")
    setPeriodo("6")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const cinueve = () => {
    setNumero("59")
    setElemento("Pr")
    setPeso("140.12")
    setElectronegatividad("")
    setNombre("Praseodimio")
    setPeriodo("6")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const sesenta = () => {
    setNumero("60")
    setElemento("Nd")
    setPeso("144.91")
    setElectronegatividad("")
    setNombre("Neodimio")
    setPeriodo("6")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const suno = () => {
    setNumero("61")
    setElemento("Pm")
    setPeso("144.91")
    setElectronegatividad("")
    setNombre("Prometio")
    setPeriodo("6")
    setGrupo("")
    setBackgrund(colors[9])

  }
  const sdos = () => {
    setNumero("62")
    setElemento("Sm")
    setPeso("150.36")
    setElectronegatividad("")
    setNombre("Samario")
    setPeriodo("6")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const stres = () => {
    setNumero("63")
    setElemento("Eu")
    setPeso("151.96")
    setElectronegatividad("")
    setNombre("Europio")
    setPeriodo("6")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const scuatro = () => {
    setNumero("64")
    setElemento("Gd")
    setPeso("157.25")
    setElectronegatividad("")
    setNombre("Gadolinio")
    setPeriodo("6")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const scinco = () => {
    setNumero("65")
    setElemento("Tb")
    setPeso("158.93")
    setElectronegatividad("")
    setNombre("Terbio")
    setPeriodo("6")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const sseis = () => {
    setNumero("66")
    setElemento("Dy")
    setPeso("162.50")
    setElectronegatividad("")
    setNombre("Disprocio")
    setPeriodo("6")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const ssiete = () => {
    setNumero("67")
    setElemento("Ho")
    setPeso("164.26")
    setElectronegatividad("")
    setNombre("Holmio")
    setPeriodo("6")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const socho = () => {
    setNumero("68")
    setElemento("Er")
    setPeso("167.26")
    setElectronegatividad("")
    setNombre("Erbio")
    setPeriodo("6")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const snueve = () => {
    setNumero("69")
    setElemento("Tm")
    setPeso("168.93")
    setElectronegatividad("")
    setNombre("Turbio")
    setPeriodo("6")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const setenta = () => {
    setNumero("70")
    setElemento("Yb")
    setPeso("173.05")
    setElectronegatividad("")
    setNombre("Iterbio")
    setPeriodo("6")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const seuno = () => {
    setNumero("71")
    setElemento("Lu")
    setPeso("174.97")
    setElectronegatividad("")
    setNombre("Lutecio")
    setPeriodo("6")
    setGrupo("3")
    setBackgrund(colors[9])
  }
  const sedos = () => {
    setNumero("72")
    setElemento("Hf")
    setPeso("178.49")
    setElectronegatividad("(1.3)")
    setNombre("Hafnio")
    setPeriodo("6")
    setGrupo("4")
    setBackgrund(colors[2])
  }
  const setres = () => {
    setNumero("73")
    setElemento("Ta")
    setPeso("178.49")
    setElectronegatividad("(1.5)")
    setNombre("Tantalio")
    setPeriodo("6")
    setGrupo("5")
    setBackgrund(colors[2])
  }
  const secuatro = () => {
    setNumero("74")
    setElemento("W")
    setPeso("183.84")
    setElectronegatividad("(1.7)")
    setNombre("Wolframio")
    setPeriodo("6")
    setGrupo("6")
    setBackgrund(colors[2])
  }
  const secinco = () => {
    setNumero("75")
    setElemento("Re")
    setPeso("186.21")
    setElectronegatividad("(1.9)")
    setNombre("Renio")
    setPeriodo("6")
    setGrupo("7")
    setBackgrund(colors[2])
  }
  const seseis = () => {
    setNumero("76")
    setElemento("Os")
    setPeso("190.23")
    setElectronegatividad("(2.2)")
    setNombre("Osmio")
    setPeriodo("6")
    setGrupo("8")
    setBackgrund(colors[2])
  }
  const sesiete = () => {
    setNumero("77")
    setElemento("Ir")
    setPeso("192.22")
    setElectronegatividad("(2.2)")
    setNombre("Iridio")
    setPeriodo("6")
    setGrupo("9")
    setBackgrund(colors[2])
  }
  const seocho = () => {
    setNumero("78")
    setElemento("Pt")
    setPeso("195.08")
    setElectronegatividad("(2.2)")
    setNombre("Platino")
    setPeriodo("6")
    setGrupo("10")
    setBackgrund(colors[2])
  }
  const senueve = () => {
    setNumero("79")
    setElemento("Au")
    setPeso("196.97")
    setElectronegatividad("(2.4)")
    setNombre("Oro")
    setPeriodo("6")
    setGrupo("11")
    setBackgrund(colors[2])
  }
  const ochenta = () => {
    setNumero("80")
    setElemento("Hg")
    setPeso("200.59")
    setElectronegatividad("(1.9)")
    setNombre("Mercurio")
    setPeriodo("6")
    setGrupo("12")
    setBackgrund(colors[2])
  }
  const ouno = () => {
    setNumero("81")
    setElemento("Tl")
    setPeso("204.38")
    setElectronegatividad("(1.8)")
    setNombre("Talio")
    setPeriodo("6")
    setGrupo("13")
    setBackgrund(colors[3])
  }
  const odos = () => {
    setNumero("82")
    setElemento("Pb")
    setPeso("207.20")
    setElectronegatividad("(1.9)")
    setNombre("Plomo")
    setPeriodo("6")
    setGrupo("14")
    setBackgrund(colors[4])
  }
  const otres = () => {
    setNumero("83")
    setElemento("Bi")
    setPeso("208.98")
    setElectronegatividad("(1.9)")
    setNombre("Bismuto")
    setPeriodo("6")
    setGrupo("15")
    setBackgrund(colors[5])
  }
  const ocuatro = () => {
    setNumero("84")
    setElemento("Po")
    setPeso("208.982")
    setElectronegatividad("()")
    setNombre("Gadolinio")
    setPeriodo("6")
    setGrupo("16")
    setBackgrund(colors[6])
  }
  const ocinco = () => {
    setNumero("85")
    setElemento("At")
    setPeso("209.987")
    setElectronegatividad("(2.2)")
    setNombre("Astato")
    setPeriodo("6")
    setGrupo("17")
    setBackgrund(colors[7])
  }
  const oseis = () => {
    setNumero("86")
    setElemento("Rn")
    setPeso("222.01")
    setElectronegatividad("")
    setNombre("Radón")
    setPeriodo("6")
    setGrupo("18")
    setBackgrund(colors[8])
  }
  const osiete = () => {
    setNumero("87")
    setElemento("Fr")
    setPeso("223.02")
    setElectronegatividad("(0.7)")
    setNombre("Francio")
    setPeriodo("7")
    setGrupo("1")
    setBackgrund(colors[0])
  }
  const oocho = () => {
    setNumero("88")
    setElemento("Ra")
    setPeso("226.02")
    setElectronegatividad("(0.9)")
    setNombre("Radio")
    setPeriodo("7")
    setGrupo("2")
    setBackgrund(colors[1])
  }
  const onueve = () => {
    setNumero("89")
    setElemento("Ac")
    setPeso("227.02")
    setElectronegatividad("")
    setNombre("Actinio")
    setPeriodo("7")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const noventa = () => {
    setNumero("90")
    setElemento("Th")
    setPeso("223.04")
    setElectronegatividad("")
    setNombre("Torio")
    setPeriodo("7")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const nuno = () => {
    setNumero("91")
    setElemento("Pa")
    setPeso("231.04")
    setElectronegatividad("")
    setNombre("Protactinio")
    setPeriodo("7")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const ndos = () => {
    setNumero("92")
    setElemento("U")
    setPeso("238.03")
    setElectronegatividad("")
    setNombre("Uranio")
    setPeriodo("7")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const ntres = () => {
    setNumero("93")
    setElemento("Np")
    setPeso("237.00")
    setElectronegatividad("")
    setNombre("Neptunio")
    setPeriodo("7")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const ncuatro = () => {
    setNumero("94")
    setElemento("Pu")
    setPeso("244.00")
    setElectronegatividad("")
    setNombre("Plutonio")
    setPeriodo("7")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const ncinco = () => {
    setNumero("95")
    setElemento("Am")
    setPeso("243.00")
    setElectronegatividad("")
    setNombre("Americio")
    setPeriodo("7")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const nseis = () => {
    setNumero("96")
    setElemento("Cm")
    setPeso("247.00")
    setElectronegatividad("")
    setNombre("Curio")
    setPeriodo("7")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const nsiete = () => {
    setNumero("97")
    setElemento("Bk")
    setPeso("247.00")
    setElectronegatividad("")
    setNombre("Berkelio")
    setPeriodo("7")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const nocho = () => {
    setNumero("98")
    setElemento("Cf")
    setPeso("251.00")
    setElectronegatividad("")
    setNombre("Californio")
    setPeriodo("7")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const nnueve = () => {
    setNumero("99")
    setElemento("Es")
    setPeso("252.00")
    setElectronegatividad("")
    setNombre("Einstenio")
    setPeriodo("7")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const cien = () => {
    setNumero("100")
    setElemento("Fm")
    setPeso("257.00")
    setElectronegatividad("")
    setNombre("Fermio")
    setPeriodo("7")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const cienuno = () => {
    setNumero("101")
    setElemento("Md")
    setPeso("258.00")
    setElectronegatividad("")
    setNombre("Mendelevio")
    setPeriodo("7")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const ciendos = () => {
    setNumero("102")
    setElemento("No")
    setPeso("259.00")
    setElectronegatividad("")
    setNombre("Nobelio")
    setPeriodo("7")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const cientres = () => {
    setNumero("103")
    setElemento("Lr")
    setPeso("174.97")
    setElectronegatividad("")
    setNombre("Laurencio")
    setPeriodo("7")
    setGrupo("")
    setBackgrund(colors[9])
  }
  const ciencuatro = () => {
    setNumero("104")
    setElemento("Rf")
    setPeso("263.00")
    setElectronegatividad("")
    setNombre("Rutherfordio")
    setPeriodo("7")
    setGrupo("4")
    setBackgrund(colors[2])
  }
  const ciencinco = () => {
    setNumero("105")
    setElemento("Db")
    setPeso("268.00")
    setElectronegatividad("")
    setNombre("Dubnio")
    setPeriodo("7")
    setGrupo("5")
    setBackgrund(colors[2])
  }
  const cienseis = () => {
    setNumero("106")
    setElemento("Sg")
    setPeso("157.25")
    setElectronegatividad("")
    setNombre("Seaborgio")
    setPeriodo("7")
    setGrupo("6")
    setBackgrund(colors[2])
  }
  const ciensiete = () => {
    setNumero("107")
    setElemento("Bh")
    setPeso("274.00")
    setElectronegatividad("")
    setNombre("Bohrio")
    setPeriodo("7")
    setGrupo("7")
    setBackgrund(colors[2])
  }
  const cienocho = () => {
    setNumero("108")
    setElemento("Hs")
    setPeso("277.00")
    setElectronegatividad("")
    setNombre("Hassio")
    setPeriodo("7")
    setGrupo("8")
    setBackgrund(colors[2])
  }
  const ciennueve = () => {
    setNumero("109")
    setElemento("Mt")
    setPeso("278.00")
    setElectronegatividad("")
    setNombre("Meitnerio")
    setPeriodo("7")
    setGrupo("9")
    setBackgrund(colors[2])
  }
  const ciendiez = () => {
    setNumero("110")
    setElemento("Ds")
    setPeso("281.00")
    setElectronegatividad("")
    setNombre("Darmstatio")
    setPeriodo("7")
    setGrupo("10")
    setBackgrund(colors[2])
  }
  const cienonce = () => {
    setNumero("111")
    setElemento("Rg")
    setPeso("281.00")
    setElectronegatividad("")
    setNombre("Roentgenio")
    setPeriodo("7")
    setGrupo("11")
    setBackgrund(colors[2])
  }
  const ciendoce = () => {
    setNumero("112")
    setElemento("Cn")
    setPeso("285.00")
    setElectronegatividad("")
    setNombre("Copernicio")
    setPeriodo("7")
    setGrupo("12")
    setBackgrund(colors[2])
  }
  const cientrece = () => {
    setNumero("113")
    setElemento("Nh")
    setPeso("286.00")
    setElectronegatividad("")
    setNombre("Nihonio")
    setPeriodo("7")
    setGrupo("13")
    setBackgrund(colors[3])
  }
  const ciencatorce = () => {
    setNumero("114")
    setElemento("Fl")
    setPeso("289.00")
    setElectronegatividad("")
    setNombre("Flerovio")
    setPeriodo("7")
    setGrupo("14")
    setBackgrund(colors[4])
  }
  const cienquince = () => {
    setNumero("115")
    setElemento("Mc")
    setPeso("289.00")
    setElectronegatividad("")
    setNombre("Moscovio")
    setPeriodo("7")
    setGrupo("15")
    setBackgrund(colors[5])
  }
  const ciendseis = () => {
    setNumero("116")
    setElemento("Lv")
    setPeso("293.00")
    setElectronegatividad("")
    setNombre("Livermorio")
    setPeriodo("7")
    setGrupo("16")
    setBackgrund(colors[6])
  }
  const ciendsiete = () => {
    setNumero("117")
    setElemento("Ts")
    setPeso("293.00")
    setElectronegatividad("")
    setNombre("Teneso")
    setPeriodo("7")
    setGrupo("17")
    setBackgrund(colors[7])
  }
  const ciendocho = () => {
    setNumero("118")
    setElemento("Og")
    setPeso("294.00")
    setElectronegatividad("")
    setNombre("Oganesón")
    setPeriodo("7")
    setGrupo("18")
    setBackgrund(colors[8])
  }
  return (
    <div className={styles.contenedor}>
        <div className='circulo-verde04'></div>
        <div className='circulo-morado02'></div>
        <div className='circulo-verde03'></div>
        <div className='circulo-verde05'></div>
        <div className='circulo-morado03'></div>
        <HeaderGeneral></HeaderGeneral>
        <div className='paginaHeader'>Tabla Periódica</div>
        <div className='contenedorTablaPeriodica1'>
          <table className='tablaPrincipal'>
            <tr>
              <td className='casillasGrupo1'><button className='botonTabla' onClick={uno}>H</button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className='casillasGrupo9'><button className='botonTabla' onClick={dos}>He</button></td>
            </tr>
            <tr>
              <td className='casillasGrupo1'><button className='botonTabla' onClick={tres}>Li</button></td>
              <td className='casillasGrupo2'><button className='botonTabla' onClick={cuatro}>Be</button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className='casillasGrupo4'><button className='botonTabla' onClick={cinco}>B</button></td>
              <td className='casillasGrupo5'><button className='botonTabla' onClick={seis}>C</button></td>
              <td className='casillasGrupo6'><button className='botonTabla' onClick={siete}>N</button></td>
              <td className='casillasGrupo7'><button className='botonTabla' onClick={ocho}>O</button></td>
              <td className='casillasGrupo8'><button className='botonTabla' onClick={nueve}>F</button></td>
              <td className='casillasGrupo9'><button className='botonTabla' onClick={diez}>Ne</button></td>
            </tr>
            <tr>
              <td className='casillasGrupo1'><button className='botonTabla' onClick={once}>Na</button></td>
              <td className='casillasGrupo2'><button className='botonTabla' onClick={doce}>Mg</button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className='casillasGrupo4'><button className='botonTabla' onClick={trece}>Al</button></td>
              <td className='casillasGrupo5'><button className='botonTabla' onClick={catorce}>Si</button></td>
              <td className='casillasGrupo6'><button className='botonTabla' onClick={quince}>P</button></td>
              <td className='casillasGrupo7'><button className='botonTabla' onClick={dseis}>S</button></td>
              <td className='casillasGrupo8'><button className='botonTabla' onClick={dsiete}>Cl</button></td>
              <td className='casillasGrupo9'><button className='botonTabla' onClick={docho}>Ar</button></td>
            </tr>
            <tr>
              <td className='casillasGrupo1'><button className='botonTabla' onClick={dnueve}>K</button></td>
              <td className='casillasGrupo2'><button className='botonTabla' onClick={veinte}>Ca</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={vuno}>Sc</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={vdos}>Ti</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={vtres}>V</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={vcuatro}>Cr</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={vcinco}>Mn</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={vseis}>Fe</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={vsiete}>Co</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={vocho}>Ni</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={vnueve}>Cu</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={treinta}>Zn</button></td>
              <td className='casillasGrupo4'><button className='botonTabla' onClick={tuno}>Ga</button></td>
              <td className='casillasGrupo5'><button className='botonTabla' onClick={tdos}>Ge</button></td>
              <td className='casillasGrupo6'><button className='botonTabla' onClick={ttres}>As</button></td>
              <td className='casillasGrupo7'><button className='botonTabla' onClick={tcuatro}>Se</button></td>
              <td className='casillasGrupo8'><button className='botonTabla' onClick={tcinco}>Br</button></td>
              <td className='casillasGrupo9'><button className='botonTabla' onClick={tseis}>Kr</button></td>
            </tr>
            <tr>
              <td className='casillasGrupo1'><button className='botonTabla' onClick={tsiete}>Rb</button></td>
              <td className='casillasGrupo2'><button className='botonTabla' onClick={tocho}>Sr</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={tnueve}>Y</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={cuarenta}>Zr</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={cuno}>Nb</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={cdos}>Mo</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={ctres}>Tc</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={ccuatro}>Ru</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={ccinco}>Rh</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={cseis}>Pd</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={csiete}>Ag</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={cocho}>Cd</button></td>
              <td className='casillasGrupo4'><button className='botonTabla' onClick={cnueve}>In</button></td>
              <td className='casillasGrupo5'><button className='botonTabla' onClick={cincuenta}>Sn</button></td>
              <td className='casillasGrupo6'><button className='botonTabla' onClick={ciuno}>Sb</button></td>
              <td className='casillasGrupo7'><button className='botonTabla' onClick={cidos}>Te</button></td>
              <td className='casillasGrupo8'><button className='botonTabla' onClick={citres}>I</button></td>
              <td className='casillasGrupo9'><button className='botonTabla' onClick={cicuatro}>Xe</button></td>
            </tr>
            <tr>
              <td className='casillasGrupo1'><button className='botonTabla' onClick={cicinco}>Cs</button></td>
              <td className='casillasGrupo2'><button className='botonTabla' onClick={ciseis}>Ba</button></td>
              <td className='casillaGrupo10'><button className={styles.botonNumeros}>57<br/>a<br/>71</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={sedos}>Hf</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={setres}>Ta</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={secuatro}>W</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={secinco}>Re</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={seseis}>Os</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={sesiete}>Ir</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={seocho}>Pt</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={senueve}>Au</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={ochenta}>Hg</button></td>
              <td className='casillasGrupo4'><button className='botonTabla' onClick={ouno}>Tl</button></td>
              <td className='casillasGrupo5'><button className='botonTabla' onClick={odos}>Pb</button></td>
              <td className='casillasGrupo6'><button className='botonTabla' onClick={otres}>Bi</button></td>
              <td className='casillasGrupo7'><button className='botonTabla' onClick={ocuatro}>Po</button></td>
              <td className='casillasGrupo8'><button className='botonTabla' onClick={ocinco}>At</button></td>
              <td className='casillasGrupo9'><button className='botonTabla' onClick={oseis}>Rn</button></td>
            </tr>
            <tr>
              <td className='casillasGrupo1'><button className='botonTabla' onClick={osiete}>Fr</button></td>
              <td className='casillasGrupo2'><button className='botonTabla' onClick={oocho}>Ra</button></td>
              <td className='casillaGrupo10'><button className={styles.botonNumeros}>89<br/>a<br/>103</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={ciencuatro}>Rf</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={ciencinco}>Db</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={cienseis}>Sg</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={ciensiete}>Bh</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={cienocho}>Hs</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={ciennueve}>Mt</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={ciendiez}>Ds</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={cienonce}>Rg</button></td>
              <td className='casillasGrupo3'><button className='botonTabla' onClick={ciendoce}>Cn</button></td>
              <td className='casillasGrupo4'><button className='botonTabla' onClick={cientrece}>Nh</button></td>
              <td className='casillasGrupo5'><button className='botonTabla' onClick={ciencatorce}>Fl</button></td>
              <td className='casillasGrupo6'><button className='botonTabla' onClick={cienquince}>Mc</button></td>
              <td className='casillasGrupo7'><button className='botonTabla' onClick={ciendseis}>Lv</button></td>
              <td className='casillasGrupo8'><button className='botonTabla' onClick={ciendsiete}>Ts</button></td>
              <td className='casillasGrupo9'><button className='botonTabla' onClick={ciendocho}>Og</button></td>
            </tr>
          </table>
        </div>
        <div className='contenedorTablaPeriodica2'>
          <table className='tablaComplementaria'>
            <tr>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={cisiete}>La</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={ciocho}>Ce</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={cinueve}>Pr</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={sesenta}>Nd</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={suno}>Pm</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={sdos}>Sm</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={stres}>Eu</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={scuatro}>Gd</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={scinco}>Tb</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={sseis}>Dy</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={ssiete}>Ho</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={socho}>Er</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={snueve}>Tm</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={setenta}>Yb</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={seuno}>Lu</button></td>
            </tr>
            <tr>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={onueve}>Ac</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={noventa}>Th</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={nuno}>Pa</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={ndos}>U</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={ntres}>Np</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={ncuatro}>Pu</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={ncinco}>Am</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={nseis}>Cm</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={nsiete}>Bk</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={nocho}>Cf</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={nnueve}>Es</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={cien}>Fm</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={cienuno}>Md</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={ciendos}>No</button></td>
              <td className='casillaGrupo10'><button className='botonTabla' onClick={cientres}>Lr</button></td>
            </tr>
          </table>
        </div>
        <div className="eleccionElemento" style={{background}}>
          <div className={styles.divNumero}>{numero}</div>
          <div className={styles.divElemento}>{elemento}</div>
          <div className={styles.divPeso}>{peso}</div>
          <div className={styles.divElectronegatividad}>{electronegatividad}</div>
          
        </div>
        <div className={styles.divInfo} style={{background}}>
          <div className={styles.divInterno}>
            <div className={styles.divContenido}>
              <b>Nombre</b>
              <div className={styles.divContenidoCambiante}>
                {nombre}
              </div>    
            </div>
            <div className={styles.divContenido}>
              <b>Periodo</b> 
              <div className={styles.divContenidoCambiante}>
                {periodo}
              </div>   
            </div>
            <div className={styles.divContenido}>
              <b>Grupo</b>
              <div className={styles.divContenidoCambiante}>
                {grupo}
              </div>   
            </div>
          </div>
          <div className={styles.divInterno}>
            <div className={styles.divContenido}>
              **
            </div>
            <div className={styles.divContenido}>
              **
            </div>
            <div className={styles.divContenido}>
              **
            </div>
          </div>
        </div>
        <Menu></Menu>
    </div>
  )
}


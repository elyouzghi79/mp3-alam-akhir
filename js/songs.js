"use strict";

let songs = [
  {
    name: "1_العالم الاخير l الحلقة الاولى l الموت l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: " د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./1_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%D9%89%20l%20%D8%A7%D9%84%D9%85%D9%88%D8%AA%20%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A1.mp3"
  },
  {
    name: "العالم الاخير l الحلقة الثانية . حسن الخاتمة 2 د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./2-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9%20l%20%D8%AD%D8%B3%D9%86%20%D8%A7%D9%84%D8%AE%D8%A7%D8%AA%D9%85%D8%A9%202%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "العالم الاخير l الحلقة الثالثة l وصايا الانبياء عند الموت l د. محمد العريفي ",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./3-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%D8%A9%20l%20%D9%88%D8%B5%D8%A7%D9%8A%D8%A7%20%D8%A7%D9%84%D8%A7%D9%86%D8%A8%D9%8A%D8%A7%D8%A1%20%D8%B9%D9%86%D8%AF%20%D8%A7%D9%84%D9%85%D9%88%D8%AA%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
   name: "العالم الاخير l الحلقة الرابعة l مشاهد الاحتضار l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./4_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%D8%A9%20l%20%D9%85%D8%B4%D8%A7%D9%87%D8%AF%20%D8%A7%D9%84%D8%A7%D8%AD%D8%AA%D8%B6%D8%A7%D8%B1%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "العالم الاخير l الحلقة الخامسة l  نزول الملائكة l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./5-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%D8%A9%20l%20%20%D9%86%D8%B2%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%84%D8%A7%D8%A6%D9%83%D8%A9%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "العالم الاخير l الحلقة السادسة l  حال المؤمن في القبر l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: " د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./6_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%D8%A9%20l%20%20%D8%AD%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D8%A4%D9%85%D9%86%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%82%D8%A8%D8%B1%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "العالم الاخير l الحلقة السابعة l  الوقف الجزء الاول l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./7_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9%D8%A9%20l%20%20%D8%A7%D9%84%D9%88%D9%82%D9%81%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "العالم الاخير l الحلقة الثامنة l الوقف الجزء الثاني l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./8_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%AB%D8%A7%D9%85%D9%86%D8%A9%20l%20%D8%A7%D9%84%D9%88%D9%82%D9%81%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
   name: "العالم الاخير l لو أن أباهم كتب وصيةً  l  الحلقة التاسعة  l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./9_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%20l%20%D9%84%D9%88%20%D8%A3%D9%86%20%D8%A3%D8%A8%D8%A7%D9%87%D9%85%20%D9%83%D8%AA%D8%A8%20%D9%88%D8%B5%D9%8A%D8%A9%D9%8B%20%20l%20%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9%D8%A9%20%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "العالم الاخير l الحلقة العاشرة l  حقوق الميت  l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./10_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%B9%D8%A7%D8%B4%D8%B1%D8%A9%20l%20%20%D8%AD%D9%82%D9%88%D9%82%20%D8%A7%D9%84%D9%85%D9%8A%D8%AA%20%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "لعالم الاخير l الحلقة الحادية عشرة l حقوق الميت الجزء الثاني  l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: " د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./11_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%AD%D8%A7%D8%AF%D9%8A%D8%A9%20%D8%B9%D8%B4%D8%B1%D8%A9%20l%20%D8%AD%D9%82%D9%88%D9%82%20%D8%A7%D9%84%D9%85%D9%8A%D8%AA%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "العالم الاخير l الحلقة الثانية عشرة l القبر الجزء الأول l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./12_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9%20%D8%B9%D8%B4%D8%B1%D8%A9%20l%20%D8%A7%D9%84%D9%82%D8%A8%D8%B1%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "العالم الاخير l الحلقة الثالثة عشرة l القبر الجزء الثاني l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./13_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%D8%A9%20%D8%B9%D8%B4%D8%B1%D8%A9%20l%20%D8%A7%D9%84%D9%82%D8%A8%D8%B1%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
   name: "العالم الاخير l الحلقة الرابعة عشرة l القبر الجزء الثالث l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./14_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%D8%A9%20%D8%B9%D8%B4%D8%B1%D8%A9%20l%20%D8%A7%D9%84%D9%82%D8%A8%D8%B1%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "العالم الاخير l الحلقة الخامسة عشرة l  النفخة الأولى في الصورl د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./15_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%D8%A9%20%D8%B9%D8%B4%D8%B1%D8%A9%20l%20%20%D8%A7%D9%84%D9%86%D9%81%D8%AE%D8%A9%20%D8%A7%D9%84%D8%A3%D9%88%D9%84%D9%89%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B5%D9%88%D8%B1l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "العالم الاخير l الحلقة السادسة عشرة l النفخة الثانية في الصورl د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: " د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./16_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%D8%A9%20%D8%B9%D8%B4%D8%B1%D8%A9%20l%20%D8%A7%D9%84%D9%86%D9%81%D8%AE%D8%A9%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B5%D9%88%D8%B1l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "العالم الأخير l الحلقة السابعة عشرة l أحوال الناس عند البعث l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./17_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9%D8%A9%20%D8%B9%D8%B4%D8%B1%D8%A9%20l%20%D8%A3%D8%AD%D9%88%D8%A7%D9%84%20%D8%A7%D9%84%D9%86%D8%A7%D8%B3%20%D8%B9%D9%86%D8%AF%20%D8%A7%D9%84%D8%A8%D8%B9%D8%AB%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "العالم الأخير l الحلقة الثامنة عشرة l أحوال الناس بعد البعث l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./18_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%AB%D8%A7%D9%85%D9%86%D8%A9%20%D8%B9%D8%B4%D8%B1%D8%A9%20l%20%D8%A3%D8%AD%D9%88%D8%A7%D9%84%20%D8%A7%D9%84%D9%86%D8%A7%D8%B3%20%D8%A8%D8%B9%D8%AF%20%D8%A7%D9%84%D8%A8%D8%B9%D8%AB%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
   name: "العالم الأخير l الحلقة التاسعة عشرة  l حوض النبي صلى الله عليه وسلم  l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./19_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9%D8%A9%20%D8%B9%D8%B4%D8%B1%D8%A9%20%20l%20%D8%AD%D9%88%D8%B6%20%D8%A7%D9%84%D9%86%D8%A8%D9%8A%20%D8%B5%D9%84%D9%89%20%D8%A7%D9%84%D9%84%D9%87%20%D8%B9%D9%84%D9%8A%D9%87%20%D9%88%D8%B3%D9%84%D9%85%20%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "العالم الأخير l الحلقة العشرون l تخفيف كربات يوم القيامة  l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./20_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%88%D9%86%20l%20%D8%AA%D8%AE%D9%81%D9%8A%D9%81%20%D9%83%D8%B1%D8%A8%D8%A7%D8%AA%20%D9%8A%D9%88%D9%85%20%D8%A7%D9%84%D9%82%D9%8A%D8%A7%D9%85%D8%A9%20%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "العالم الأخير l الحلقة الحادية والعشرون l سبعة يظلهم الله في ظله الجزء الاول  l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: " د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./21_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%AD%D8%A7%D8%AF%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%88%D9%86%20l%20%D8%B3%D8%A8%D8%B9%D8%A9%20%D9%8A%D8%B8%D9%84%D9%87%D9%85%20%D8%A7%D9%84%D9%84%D9%87%20%D9%81%D9%8A%20%D8%B8%D9%84%D9%87%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "لعالم الأخير l الحلقة الثانية والعشرون l الشفاعة الجزء الاول  l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./22_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%88%D9%86%20l%20%D8%A7%D9%84%D8%B4%D9%81%D8%A7%D8%B9%D8%A9%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "العالم الأخير l الحلقة الثالثة والعشرون l سبعة يظلهم الله في ظله الجزء الثاني  l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./23_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%D8%A9%20%D9%88%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%88%D9%86%20l%20%D8%B3%D8%A8%D8%B9%D8%A9%20%D9%8A%D8%B8%D9%84%D9%87%D9%85%20%D8%A7%D9%84%D9%84%D9%87%20%D9%81%D9%8A%20%D8%B8%D9%84%D9%87%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
   name: "العالم الأخير l الحلقة الرابعة والعشرون l الشفاعة الجزء الثاني  l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./24_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%D8%A9%20%D9%88%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%88%D9%86%20l%20%D8%A7%D9%84%D8%B4%D9%81%D8%A7%D8%B9%D8%A9%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "العالم الأخير l الحلقة الخامسة والعشرون l الشفاعة الجزء الثالث l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./25_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%D8%A9%20%D9%88%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%88%D9%86%20l%20%D8%A7%D9%84%D8%B4%D9%81%D8%A7%D8%B9%D8%A9%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "العالم الأخير l الحلقة السادسة والعشرون l الشفاعة الجزء الرابع l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "Хачатурян",
    audio: "https://archive.org/download/8-l-l-l-./26_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%D8%A9%20%D9%88%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%88%D9%86%20l%20%D8%A7%D9%84%D8%B4%D9%81%D8%A7%D8%B9%D8%A9%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%B1%D8%A7%D8%A8%D8%B9%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "لعالم الأخير l الحلقة السابعة والعشرون l مواقف في يوم القيامة الجزء الاول  l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: " د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./27_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9%D8%A9%20%D9%88%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%88%D9%86%20l%20%D9%85%D9%88%D8%A7%D9%82%D9%81%20%D9%81%D9%8A%20%D9%8A%D9%88%D9%85%20%D8%A7%D9%84%D9%82%D9%8A%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%20%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "العالم الأخير l الحلقة الثامنة والعشرون l مواقف في يوم القيامة الجزء الثاني  l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./28_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%AB%D8%A7%D9%85%D9%86%D8%A9%20%D9%88%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%88%D9%86%20l%20%D9%85%D9%88%D8%A7%D9%82%D9%81%20%D9%81%D9%8A%20%D9%8A%D9%88%D9%85%20%D8%A7%D9%84%D9%82%D9%8A%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  },
  {
    name: "العالم الأخير l الحلقة التاسعة والعشرون l أحوال الناس في المحشر  l د. محمد العريفي",
    img: "https://ia601406.us.archive.org/23/items/lo_20220805/lo.jpeg",
    artist: "د. محمد العريفي",
    audio: "https://archive.org/download/8-l-l-l-./29_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%20%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%20l%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%20%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D8%B9%D8%A9%20%D9%88%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%88%D9%86%20l%20%D8%A3%D8%AD%D9%88%D8%A7%D9%84%20%D8%A7%D9%84%D9%86%D8%A7%D8%B3%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%85%D8%AD%D8%B4%D8%B1%20%20l%20%D8%AF.%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B1%D9%8A%D9%81%D9%8A.mp3"
  }
];



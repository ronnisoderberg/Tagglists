### Vad händer i alla kolumnerna?

Målbilden ex
| A | B |  C | D | E | F | G | H  |  I | J |  K |
|---|---|---|---|---|---|---|---|---|---|---|
| AS202_142_GTU_PV  | REAL |  003_AS202-122_DUC88_| S2(V) |  -40 |  110 |  -40 | 110  |  °C | ###.#EU  |  Utetemperatur |


- [ ] Skriv ut vad alla kolumnerna är och vad dom tar sin data ifrån. 
- [ ] Lista all funktionalitet som ska finnas.


## Saia DUC
## Trend DUC
##### A Kolumen
Är namnet på komponenten som kommer från "object-name" i EDE C8 och neråt. Namnen ska inte ha mellanslag eller bindessträck i sig. Formatering ska göra för att hantera det. 

##### B Kolumen
- EDE dokumentets object-type 0, returnerar detta "REAL".
- EDE dokumentets object-type 3, returnerar detta "DIGITAL"
- EDE dokumentets object-type 2, returnerar detta "REAL"
- EDE dokumentets object-type 5, returnerar detta "DIGITAL"
- EDE dokumentets object-type 4, returnerar detta "DIGITAL"
- EDE dokumentets object-type 17, returnerar detta "STRING"

##### C Kolumen
Är DUC namnet som tillhör just denna enheten. Måste matas in manuellt. 

##### D Kolumen
enheterna från SET. EDE filen är 
- S21(V) är Sensorer(S) 0 i "object-type" sätter S, "object-instance" sätter 21
- I2(S) Digins(I) 3 i "object-type" sätter I, "object-instance" sätter 2an
- K85(V) Knobs(K) 2 i "object-type" sätter K, "object-instance" sätter 85
- W5(S) Switchar(W) 5 i "object-type" sätter W, "object-instance" sätter 5
###### (Sedan det kommer inte behövas något annat än dessa 4a.) 

##### E Kolumen
Beror på vad som finns i D2 cellen(exmpelvis) mostavande.
- Om värdet i D2 är 0: ska det returneras `"0"`
- Om värdet i D2 är "x": ska det returneras `"-500"`
- Om värdet i D2 är "min": ska det returneras `"0"`
- Om värdet i D2 är "sec": ska det returneras `"0"`
- Om värdet i D2 är "h": ska det returneras `"0"`
- Om värdet i D2 är "°C": ska det returneras `"-40"`
- Om värdet i D2 är "kPa": ska det returneras `"0"`
- Om värdet i D2 är "Pa": ska det returneras `"0"`
- Om värdet i D2 är "%": ska det returneras `"-10"`
- Om värdet i D2 är "%RH": ska det returneras `"-10"`
- Om värdet i D2 är "bar": ska det returneras `"0"`
- Om värdet i D2 är "l/s": ska det returneras `"-10000"`
- Om värdet i D2 är "m³/h": ska det returneras `"-10000"`
- Om värdet i D2 är "l/h": ska det returneras `"-10000"`
- Om värdet i D2 är "g/kg": ska det returneras `"-10000"`
- Om värdet i D2 är "sek": ska det returneras `"0"`
- Om värdet i D2 är "MWh": ska det returneras `"0"`
- Om värdet i D2 är "kW": ska det returneras `"0"`
- Om värdet i D2 är "m³ h": ska det returneras `"-10000"`
- Om värdet i D2 är "m³": ska det returneras `"-10000"`
- Om värdet i D2 är "K": ska det returneras `"0"`
- Om värdet i D2 är "m³/s": ska det returneras `"-10000"`
- Om värdet i D2 är "s": ska det returneras `"0"`
- Om värdet i D2 är "ppm": ska det returneras `"0"`
- Om värdet i D2 är "A": ska det returneras `"0"`
- Om värdet i D2 är "V": ska det returneras `"0"`
- Om värdet i D2 är "kWh": ska det returneras `"0"`
- Om värdet i D2 är "rpm": ska det returneras `"-10000"`
- Om värdet i D2 är "Hz": ska det returneras `"-10000"`
- Om värdet i D2 är "W": ska det returneras `"0"`
- Om värdet i D2 är "dagar": ska det returneras `"0"`
- Om värdet i D2 är "Nm": ska det returneras `"0"`

##### F Kolumen
Beror på vad som finns i D2 cellen(exmpelvis) mostavande.
- Om värdet i D2 är 0: ska det returneras `"1"`
- Om värdet i D2 är "x": ska det returneras `"500"`
- Om värdet i D2 är "min": ska det returneras `"1000"`
- Om värdet i D2 är "sec": ska det returneras `"1000"`
- Om värdet i D2 är "h": ska det returneras `"1000"`
- Om värdet i D2 är "°C": ska det returneras `"110"`
- Om värdet i D2 är "kPa": ska det returneras `"1000"`
- Om värdet i D2 är "Pa": ska det returneras `"1000"`
- Om värdet i D2 är "%": ska det returneras `"110"`
- Om värdet i D2 är "%RH": ska det returneras `"110"`
- Om värdet i D2 är "bar": ska det returneras `"1000"`
- Om värdet i D2 är "l/s": ska det returneras `"10000"`
- Om värdet i D2 är "m³/h": ska det returneras `"10000"`
- Om värdet i D2 är "l/h": ska det returneras `"10000"`
- Om värdet i D2 är "g/kg": ska det returneras `"10000"`
- Om värdet i D2 är "sek": ska det returneras `"1000"`
- Om värdet i D2 är "MWh": ska det returneras `"10000"`
- Om värdet i D2 är "kW": ska det returneras `"10000"`
- Om värdet i D2 är "m³ h": ska det returneras `"10000"`
- Om värdet i D2 är "m³": ska det returneras `"1000"`
- Om värdet i D2 är "K": ska det returneras `"1000"`
- Om värdet i D2 är "m³/s": ska det returneras `"10000"`
- Om värdet i D2 är "s": ska det returneras `"1000"`
- Om värdet i D2 är "ppm": ska det returneras `"1000"`
- Om värdet i D2 är "kWh": ska det returneras `"10000"`
- Om värdet i D2 är "A": ska det returneras `"1000"`
- Om värdet i D2 är "V": ska det returneras `"1000"`
- Om värdet i D2 är "rpm": ska det returneras `"10000"`
- Om värdet i D2 är "Hz": ska det returneras `"10000"`
- Om värdet i D2 är "W": ska det returneras `"10000"`
- Om värdet i D2 är "dagar": ska det returneras `"10000"`
- Om värdet i D2 är "Nm": ska det returneras `"10000"`

##### G Kolumen
Beror på vad som finns i D2 cellen(exmpelvis) mostavande.
- Om värdet i D2 är 0: ska det returneras `"0"`
- Om värdet i D2 är "x": ska det returneras `"-500"`
- Om värdet i D2 är "min": ska det returneras `"0"`
- Om värdet i D2 är "sec": ska det returneras `"0"`
- Om värdet i D2 är "h": ska det returneras `"0"`
- Om värdet i D2 är "°C": ska det returneras `"-40"`
- Om värdet i D2 är "kPa": ska det returneras `"0"`
- Om värdet i D2 är "Pa": ska det returneras `"0"`
- Om värdet i D2 är "%": ska det returneras `"-10"`
- Om värdet i D2 är "%RH": ska det returneras `"-10"`
- Om värdet i D2 är "bar": ska det returneras `"0"`
- Om värdet i D2 är "l/s": ska det returneras `"-10000"`
- Om värdet i D2 är "m³/h": ska det returneras `"-10000"`
- Om värdet i D2 är "l/h": ska det returneras `"-10000"`
- Om värdet i D2 är "g/kg": ska det returneras `"-10000"`
- Om värdet i D2 är "sek": ska det returneras `"0"`
- Om värdet i D2 är "MWh": ska det returneras `"0"`
- Om värdet i D2 är "kW": ska det returneras `"0"`
- Om värdet i D2 är "m³ h": ska det returneras `"-10000"`
- Om värdet i D2 är "m³": ska det returneras `"-10000"`
- Om värdet i D2 är "K": ska det returneras `"0"`
- Om värdet i D2 är "m³/s": ska det returneras `"-10000"`
- Om värdet i D2 är "s": ska det returneras `"0"`
- Om värdet i D2 är "ppm": ska det returneras `"0"`
- Om värdet i D2 är "A": ska det returneras `"0"`
- Om värdet i D2 är "V": ska det returneras `"0"`
- Om värdet i D2 är "kWh": ska det returneras `"0"`
- Om värdet i D2 är "rpm": ska det returneras `"-10000"`
- Om värdet i D2 är "Hz": ska det returneras `"-10000"`
- Om värdet i D2 är "W": ska det returneras `"0"`
- Om värdet i D2 är "dagar": ska det returneras `"0"`
- Om värdet i D2 är "Nm": ska det returneras `"0"`

##### H Kolumen
Beror på vad som finns i D2 cellen(exmpelvis) mostavande.
- Om värdet i D2 är 0: ska det returneras `"1"`
- Om värdet i D2 är "x": ska det returneras `"500"`
- Om värdet i D2 är "min": ska det returneras `"1000"`
- Om värdet i D2 är "sec": ska det returneras `"1000"`
- Om värdet i D2 är "h": ska det returneras `"1000"`
- Om värdet i D2 är "°C": ska det returneras `"110"`
- Om värdet i D2 är "kPa": ska det returneras `"1000"`
- Om värdet i D2 är "Pa": ska det returneras `"1000"`
- Om värdet i D2 är "%": ska det returneras `"110"`
- Om värdet i D2 är "%RH": ska det returneras `"110"`
- Om värdet i D2 är "bar": ska det returneras `"1000"`
- Om värdet i D2 är "l/s": ska det returneras `"10000"`
- Om värdet i D2 är "m³/h": ska det returneras `"10000"`
- Om värdet i D2 är "l/h": ska det returneras `"10000"`
- Om värdet i D2 är "g/kg": ska det returneras `"10000"`
- Om värdet i D2 är "sek": ska det returneras `"1000"`
- Om värdet i D2 är "MWh": ska det returneras `"10000"`
- Om värdet i D2 är "kW": ska det returneras `"10000"`
- Om värdet i D2 är "m³ h": ska det returneras `"10000"`
- Om värdet i D2 är "m³": ska det returneras `"1000"`
- Om värdet i D2 är "K": ska det returneras `"1000"`
- Om värdet i D2 är "m³/s": ska det returneras `"10000"`
- Om värdet i D2 är "s": ska det returneras `"1000"`
- Om värdet i D2 är "ppm": ska det returneras `"1000"`
- Om värdet i D2 är "kWh": ska det returneras `"10000"`
- Om värdet i D2 är "A": ska det returneras `"1000"`
- Om värdet i D2 är "V": ska det returneras `"1000"`
- Om värdet i D2 är "rpm": ska det returneras `"10000"`
- Om värdet i D2 är "Hz": ska det returneras `"10000"`
- Om värdet i D2 är "W": ska det returneras `"10000"`
- Om värdet i D2 är "dagar": ska det returneras `"10000"`
- Om värdet i D2 är "Nm": ska det returneras `"10000"`

#### I Kolumn
Detta gäller bara knobs och sensorer. Dom ska plocka sin enhetsbeteckningar från respektive TAB som finns i excelfilen som har Export i sig. Med andra ord om D kolumenn på samma enhet inte har S eller K i sin cell så ska den inte skriva ut någon enhet. <br> sensortabben börjar den på D2, knobstabben börjar den på D2.

#### J Kolumn
- Om värdet i cell M2 är 0, returnera "#EU".
- Om värdet i cell M2 är "x", returnera "###.##EU".
- Om värdet i cell M2 är "min", returnera "####EU".
- Om värdet i cell M2 är "sec", returnera "####EU".
- Om värdet i cell M2 är "h", returnera "####EU".
- Om värdet i cell M2 är "°C", returnera "###.#EU".
- Om värdet i cell M2 är "kPa", returnera "###EU".
- Om värdet i cell M2 är "Pa", returnera "###EU".
- Om värdet i cell M2 är "%", returnera "###EU".
- Om värdet i cell M2 är "%RH", returnera "###EU".
- Om värdet i cell M2 är "bar", returnera "###EU".
- Om värdet i cell M2 är "l/s", returnera "#####EU".
- Om värdet i cell M2 är "m³/h", returnera "#####EU".
- Om värdet i cell M2 är "l/h", returnera "#####EU".
- Om värdet i cell M2 är "g/kg", returnera "#####EU".
- Om värdet i cell M2 är "sek", returnera "####EU".
- Om värdet i cell M2 är "MWh", returnera "#####EU".
- Om värdet i cell M2 är "kW", returnera "#####EU".
- Om värdet i cell M2 är "m³ h", returnera "#####EU".
- Om värdet i cell M2 är "m³", returnera "#####EU".
- Om värdet i cell M2 är "K", returnera "###.#EU".
- Om värdet i cell M2 är "m³/s", returnera "#####EU".
- Om värdet i cell M2 är "s", returnera "####EU".
- Om värdet i cell M2 är "ppm", returnera "####EU".
- Om värdet i cell M2 är "V", returnera "#####EU".
- Om värdet i cell M2 är "Hz", returnera "#####EU".
- Om värdet i cell M2 är "rpm", returnera "#####EU".
- Om värdet i cell M2 är "W", returnera "#####EU".
- Om värdet i cell M2 är "dagar", returnera "#####EU".
- Om värdet i cell M2 är "Nm", returnera "#####EU".
- Om värdet i cell M2 är "A", returnera "####,#EU".
- Om värdet i cell M2 är "kWh", returnera "#####EU".

#### K Kolumn
"description" hämtar den allt som finns i F8 cellen i EDE filen. 

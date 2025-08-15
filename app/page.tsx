"use client";
import { useState } from "react";

interface Leader {
  name: string;
  rank: string;
  rankNumber: number;
  age: number;
  experience: string[];
  description: string;
}

const leaders: Leader[] = [
  {
    name: "Jay Hartnuss",
    rank: "Chief of Police",
    rankNumber: 12,
    age: 20,
    experience: [
      "GCRP FIB Rang 9 (2020-2021 als Jay Phillips)",
      "Sibaui FIB Rang 6 (2023 als James Brooks)",
      "Paradox FIB Rang 11 (2023 als James Brooks)",
      "GVMP LSPD Rang 5 (2025 als Jay Hartnuss)",
    ],
    description:
      "Erfahrener Leader mit umfangreicher FIB und LSPD Erfahrung auf verschiedenen Roleplay Servern.",
  },
  {
    name: "Dion Weiss",
    rank: "Deputy Chief",
    rankNumber: 11,
    age: 19,
    experience: [
      "Paradox LSPD Rang 11 (2023 als Dion Samarita-Weiss)",
      "PGRP LSPD Rang 12 (2024 als Dion Brandt-Weiss)",
      "GVMP Army Rang 8 (2024 als Dion Kubicki-Weiss)",
      "GVMP Los Muertos Rang 10 (2025 als Dion Kubicki-Weiss)",
      "GVMP Kazoku Rang 10 (2025 als Dion Kubicki-Weiss)",
    ],
    description:
      "Vielseitiger Leader mit Erfahrung in staatlichen und illegalen Organisationen auf RoleplayServern.",
  },
  {
    name: "John Forces",
    rank: "Deputy Chief",
    rankNumber: 11,
    age: 20,
    experience: [
      "GCRP LSPD Rang 10 (2020 als Liam Johnson)",
      "Sibaui LSPD Rang 9 (2021-2022 als Dennis Forces)",
      "Sibaui Bloods Rang 9 (2022 als Dennis Forces)",
      "Paradox LSPD Rang 10 (2023 als Dennis Soades)",
      "GVMP LSPD Rang 7 (2023-2024 als John Forces)",
      "GVMP FIB Rang 6 (2024 als John Forces)",
      "GVMP Los Muertos Rang 9 (2025 als John Forces)",
    ],
    description:
      "Langjährige Führungserfahrung in verschiedenen Organisationen mit starkem Fokus auf Polizeiarbeit.",
  },
  {
    name: "Lukas Velasquez",
    rank: "Assistant Chief",
    rankNumber: 10,
    age: 31,
    experience: [
      "GVMP Army Rang 10 (2024-2025 als Lukas Velasquez-Loewe)",
      "GVMP Kazoku Rang 12 (2025 als Lukas Velasquez-Loewe)",
    ],
    description:
      "Erfahrener Leader mit militärischer Führungserfahrung und höchsten Rängen in verschiedenen Organisationen.",
  },
  {
    name: "Jannik Samarita",
    rank: "Assistant Chief",
    rankNumber: 10,
    age: 19,
    experience: [
      "Sibaui LSC Rang 12 (2021 als Jannik Samarita)",
      "GVMP Army Rang 9 (2022 als Jannik Samarita)",
      "GVMP FIB Rang 5 (2023 als Jannik Samarita)",
      "PGRP LSPD Rang 11 (2024 als Jannik Samarita)",
      "GVMP Army Rang 11 (2023-2025 als Jannik Samarita)",
      "GVMP Kazoku Rang 9 (2025 als Jannik Samarita)",
      "GVMP LSPD Rang 7 (2025 als Jannik Samarita)",
    ],
    description:
      "Vielseitige Erfahrung in verschiedenen Bereichen mit konsistenter Führungsleistung über mehrere Jahre.",
  },
  {
    name: "Niklas Sombrek",
    rank: "Assistant Chief",
    rankNumber: 10,
    age: 21,
    experience: [
      "LifeV LSPD Rang 12 (2022 als Niklas Sombrek)",
      "Paradox LSPD Rang 12 (2023 als Niklas Sombrek)",
      "GVMP LSPD Rang 6 (2025 als Niklas Sombrek)",
    ],
    description:
      "Spezialist für LSPD-Führung mit mehrfacher Chief-Erfahrung auf verschiedenen Roleplay Servern.",
  },
];

/**
 * Vollständiger IDG-Inhalt als strukturierte Daten
 * (einfach erweiterbar; whitespace-pre-line sorgt für saubere Zeilenumbrüche)
 */
type Paragraph = { title: string; text: string };
type Abschnitt = { title: string; paragraphs: Paragraph[] };

const dienstgesetzAbschnitte: Abschnitt[] = [
  {
    title:
      "Internes Dienstgesetz (IDG) - Das ganze muss noch auf Regelwerk und Gesetze abgestimmt werden. Es ist nur eine Möglichkeit von vielen, wie das ganze aussehen könnte.",
    paragraphs: [
      {
        title: "Inhaltsverzeichnis",
        text:
          "1. Abschnitt – Allgemeiner Teil\n" +
          "§1 Begriff des Los Santos Police Departments\n" +
          "§2 Weitere Begrifflichkeiten\n" +
          "§3 Rechtsweg\n" +
          "§4 Aufgaben des Los Santos Police Departments\n" +
          "§5 Dienstanweisungen\n" +
          "§6 Verhältnis zu anderen Behörden oder Privatunternehmen\n" +
          "§7 Grundsatz der Verhältnismäßigkeit\n" +
          "§8 Ausweispflicht der Beamten\n\n" +
          "2. Abschnitt – Befugnisse\n" +
          "§9 Allgemeine Befugnisse\n" +
          "§10 Auskunfts- und Identitätsprüfungs-Recht\n" +
          "§11 Vorladung\n" +
          "§12 Platzverweise\n" +
          "§13 Gewahrsam\n" +
          "§14 Anhalten und Durchsuchung von Personen und Privateigentum\n" +
          "§15 Sicherstellung und Vernichtung von Privateigentum\n" +
          "§16 Auskunftsrecht des Bürgers\n" +
          "§17 Kontrollpunkte / Checkpoints\n" +
          "§18 Offenes Tragen von Waffen\n\n" +
          "3. Abschnitt – Zwangsmittel\n" +
          "§19 Handeln auf Anordnung\n" +
          "§20 Fesselung\n" +
          "§21 Einsatz tödlicher Gewalt\n" +
          "§22 Einsatz weniger tödlicher Gewalt\n\n" +
          "4. Abschnitt – Dienstvorschriften\n" +
          "§23 Dienstgruppen\n" +
          "§24 Erfassung und Priorisierung interner Dienstvorschriften\n\n" +
          "5. Abschnitt – Verwaltung\n" +
          "§25 Geburtstage\n" +
          "§26 Kündigung\n" +
          "§27 Entlassung\n" +
          "§28 Dienstpflicht\n" +
          "§29 Bewerber\n" +
          "§30 Off-Duty Carry\n\n" +
          "6. Abschnitt – Streifendienst\n" +
          "§31 Streifenbildung\n" +
          "§32 Regelung des Fuhrparks\n" +
          "§33 Regelung der Kleiderordnung",
      },
    ],
  },
  {
    title: "1. Abschnitt – Allgemeiner Teil",
    paragraphs: [
      {
        title: "§1 Begriff des Los Santos Police Departments",
        text: "Polizei im Sinne des Gesetzes sind alle Beamten des Los Santos Police Department (LSPD) und ihre Untereinheiten.",
      },
      {
        title: "§2 Weitere Begrifflichkeiten",
        text:
          "Polizeileitung: Alle Personen in den Rängen: Chief of Police, Deputy Chief, Assistant Chief\n" +
          "Anfangsverdacht: Das Vorhandensein mindestens eines allgemein schlüssigen Punktes, der das Vorhandensein einer Straftat oder Ordnungswidrigkeit vermuten lässt.\n" +
          "Hinreichender Tatverdacht: Die Verurteilung eines Beschuldigten wäre nach Indizienlage wahrscheinlich.\n" +
          "Dringender Tatverdacht: Verurteilung eines Beschuldigten wäre nach der Beweislage höchstwahrscheinlich.\n" +
          "Erfolgreiche Beschwerde: Eine eingereichte Beschwerde, welche sowohl begründet als auch relevant ist.\n" +
          "Undercover: Nicht als Polizist erkenntlicher Beamter.\n" +
          "Verdeckter Ermittler/Zivilermittler: Ein Beamter in Zivilkleidung oder ein als ziviles Fahrzeug getarntes Polizeifahrzeug.\n" +
          "Dezernat: Die Abteilungen Training Division, S.W.A.T. & Dienstaufsichtsbehörde.\n" +
          "Akute Bedrohung: Das unmittelbare Zielen mit einer angelegten Waffe auf Menschen. Das An- oder Überfahren von Personen mittels Fahrzeug oder die allgemeine Gefährdung von Menschenleben. Die unmittelbare Flucht bewaffneter Personen in eine als Deckung geeignete Umgebung trotz klarer Bedrohungslage.\n" +
          "Amtshandlung/Diensthandlung: Eine offizielle Maßnahme eines Beamten in Einklang mit diesem oder anderen Gesetzen.\n" +
          "Leitungsfunktionen: Alle Mitglieder der Polizeileitung, alle Offiziere und Dezernatsleiter entsprechend der Mitgliederliste.\n" +
          "Offiziere: Beamte in den Rängen Lieutenant und Captain.\n" +
          "Mannschaftsdienstgrade: Beamte in den Rängen Recruit, Officer in Training, Probationary Officer, Officer, Senior Officer, Corporal, Senior Corporal und Sergeant.\n" +
          "Gefahr im Verzug: Eine Situation, welche ohne sofortiges Eingreifen durch Beamte eindeutig zu Schaden an Leib und Leben oder zu der Vernichtung von Beweismitteln führt, ohne die Möglichkeit, einen sonst notwendigen richterlichen Beschluss einzuholen.",
      },
      {
        title: "§3 Rechtsweg",
        text:
          "Verstöße gegen dieses Gesetz können über die Dienstaufsichtsbehörde eingereicht werden.\n" +
          "Bei eingereichten, relevanten und zugleich begründeten Beschwerden ist der zuständige Abteilungsleiter zu informieren und die Dienstaufsichtsbehörde mit der Untersuchung des Rechtsweges zu betrauen.",
      },
      {
        title: "§4 Aufgaben des Los Santos Police Departments",
        text:
          "Die Polizei hat die Aufgabe, Gefahren für die öffentliche Sicherheit oder Ordnung abzuwenden, die nach den gültigen Gesetzen definiert sind.\n" +
          "Die Polizei hat ferner Aufgaben zu erfüllen, die durch andere Gesetze entstehen, wenn diese nicht anderen Behörden zugeteilt sind.",
      },
      {
        title: "§5 Dienstanweisungen",
        text:
          "Die Polizeileitung darf ihren Beamten das Auslegen von Gesetzen, Beschlüssen, Verfahrensweisen oder Ähnlichem schriftlich vorgeben (Dienstanweisung), wenn hierdurch geltendes Recht nicht verletzt wird.\n" +
          "Jeder Polizist ist dazu verpflichtet, sich regelmäßig über Änderungen und Veröffentlichungen von diesem Gesetz oder internen Dienstanweisungen zu informieren.",
      },
      {
        title: "§6 Verhältnis zu anderen Behörden oder Privatunternehmen",
        text:
          "Die Polizei leistet Vollzugshilfe für zivilrechtliche und strafrechtliche Urteile ordentlicher Gerichte.\n" +
          "Auf Antrag durch andere Behörden ist die Polizei dazu verpflichtet, Unterstützung zur Strafverfolgung zu leisten.\n" +
          "Höhergestellte Dienstgruppen anderer Behörden sind entsprechend der Gepflogenheiten zu behandeln.",
      },
      {
        title: "§7 Grundsatz der Verhältnismäßigkeit",
        text: "Von mehreren möglichen und geeigneten Maßnahmen hat die Polizei oder der einzelne Beamte diejenige zu treffen, die dem unschuldigen Leben und Eigentum am wenigsten Schaden anrichtet, ohne zugleich das eigene Leben oder das Leben anderer unnötig zu gefährden.",
      },
      {
        title: "§8 Ausweispflicht der Beamten",
        text:
          "Auf Verlangen des von einer Diensthandlung Betroffenen oder seines Rechtsbeistandes hat ein – als solcher erkennbarer – Polizeibeamter sich auszuweisen, solange der Zweck der Diensthandlung hierdurch nicht beeinträchtigt wird oder eine akute Bedrohungssituation vorliegt.\n" +
          "Die Selbstidentifikation findet erst statt, wenn der Betroffene einer Amtshandlung sich gegenüber dem Beamten ausgewiesen hat.\n" +
          "Beamte in Zivil müssen sich, wenn möglich, vor Beginn einer Amtshandlung entsprechend Abs. 1 ausweisen.",
      },
    ],
  },
  {
    title: "2. Abschnitt – Befugnisse",
    paragraphs: [
      {
        title: "§9 Allgemeine Befugnisse",
        text: "Die Polizei kann grundsätzlich alle notwendigen Maßnahmen treffen, um Gefahren für die öffentliche Sicherheit oder Ordnung abzuwehren, solange hierdurch keine gesonderten Regelungen bestehen oder andere Behörden oder Firmen diese nicht aktiv wahrnehmen können.",
      },
      {
        title: "§10 Auskunfts- und Identitätsprüfungs-Recht",
        text:
          "Auf Befragen durch die Polizei ist eine Person verpflichtet, Name und Anschrift zu nennen bzw. den Personalausweis vorzulegen.\n" +
          "Die Polizei darf die Identität und die Gültigkeit gesetzlicher Dokumente jeder Personengruppe zu jeder Zeit feststellen und kontrollieren.",
      },
      {
        title: "§11 Vorladung",
        text:
          "Die Polizei kann mutmaßliche Zeugen schriftlich oder mündlich zu einer Befragung in polizeilichen Einrichtungen rechtsverbindlich einladen (Vorladung).\n" +
          "Hierbei ist der Grund der Vorladung zu nennen.\n" +
          "Wird eine Vorladung nicht innerhalb von 48 Stunden entsprochen oder bleibt unbeantwortet (vorsätzlich missachtet), kann diese mittels Zwang durchgesetzt werden und wird ggf. als Missachtung polizeilicher Anordnungen zur Anzeige gebracht.",
      },
      {
        title: "§12 Platzverweise",
        text:
          "Die Polizei vermag einzelnen Personen oder Personengruppen zeitlich und örtlich Zutrittsbeschränkungen zu erteilen, um Gefahren zu vermeiden, die Ordnung wiederherzustellen oder Einsatzwege freizustellen.\n" +
          "Die maximale Dauer eines Platzverweises beträgt 24 Stunden.\n" +
          "Auf Privatgelände oder auf dem Gelände anderer Behörden sind Platzverweise nur dann zulässig, wenn die Einsatzlage dies erfordert.",
      },
      {
        title: "§13 Gewahrsam",
        text:
          "Die Polizei kann Personen in ihrer persönlichen Freiheit einschränken (Verhaftung), um eine drohende Gefahr abzuwenden. Insbesondere bei Vorliegen einer der folgenden Gründe:\n" +
          "• Eine Person verweigert bei einer rechtmäßigen Amtshandlung die Identifikation.\n" +
          "• Wenn mindestens ein hinreichender Tatverdacht zu einer Straftat oder der Mithilfe einer Straftat vorliegt.\n" +
          "• Eine ausstehende Haftstrafe zu vollstrecken ist.\n" +
          "Verhaftete Personen sind unbedingt so schnell – wie dem Polizisten zumutbar – zu behandeln.",
      },
      {
        title: "§14 Anhalten und Durchsuchung von Personen und Privateigentum",
        text:
          "Die Polizei darf Personen und/oder Fahrzeuge anhalten, wenn zumindest der Anfangsverdacht einer Straftat oder einer Ordnungswidrigkeit gegeben ist oder eine Identifikation der Person dringend notwendig erscheint.\n" +
          "Steht der in Abs. 1 definierte Verdacht einer Straftat/Ordnungswidrigkeit im Zusammenhang mit am Körper/Fahrzeug mitgeführten Gegenständen, so darf auch das Privateigentum der beteiligten Personen durchsucht werden.\n" +
          "Kommerziell nutzbare Fahrzeuge und Lastkraftwagen dürfen zu jeder Zeit einer Kontrolle unterzogen werden.\n" +
          "Befriedetes Besitztum sowie darauf befindliche Personen und Objekte dürfen grundsätzlich nach den Voraussetzungen aus Abs. 1 nur auf richterlichen Beschluss hin betreten und durchsucht werden.\n" +
          "Liegt Gefahr im Verzug vor oder wird vor einer Amtshandlung auf befriedetes Besitztum geflohen, so kann eine Durchsuchung ohne richterlichen Beschluss erfolgen.",
      },
      {
        title: "§15 Sicherstellung und Vernichtung von Privateigentum",
        text:
          "Jegliche illegalen Gegenstände oder Fahrzeuge dürfen zu jeder Zeit nach Registrierung beschlagnahmt und vernichtet werden.\n" +
          "Legale Gegenstände außer Fahrzeuge, die im Verlauf einer Straftat gegen andere Menschen oder deren Eigentum eingesetzt oder mitgeführt werden, dürfen ebenfalls beschlagnahmt und vernichtet werden. Fahrzeuge indessen dürfen nur beschlagnahmt werden.\n" +
          "Waffen dürfen abgenommen und vernichtet werden, wenn die Person keine gültige Waffenlizenz besitzt oder während einer Waffenlizenzsperre mit Waffen angetroffen wird.\n" +
          "Ersatzzahlungen für den Verlust illegaler Gegenstände sind ausgeschlossen.\n" +
          "Ersatzzahlungen für den Verlust oder die Beschädigung legaler Gegenstände, die durch den Eigentümer oder Besitzer in absichtlicher oder zumindest grob fahrlässiger Weise gegen andere eingesetzt wurden, sind ausgeschlossen.",
      },
      {
        title: "§16 Auskunftsrecht des Bürgers",
        text:
          "Jede Person hat die Möglichkeit, durch persönliche Vorsprache Auskunft über seine Akte zu erfahren.\n" +
          "Informationen über laufende Ermittlungen oder schon alleine die Information, dass Ermittlungen durchgeführt werden, dürfen nur über die Dienstaufsichtsbehörde oder Direktion herausgegeben werden.",
      },
      {
        title: "§17 Kontrollpunkte / Checkpoints",
        text:
          "Die Polizei hat das Recht, Kontrollstellen/Checkpoints zu errichten. Bei diesen Checkpoints dürfen Personen sowie Fahrzeuge auf das Vorhandensein von illegalen Waffen, Gegenständen oder Substanzen kontrolliert werden. Die Bestimmungen nach §14 (Anhalten und Durchsuchen) werden hierbei außer Kraft gesetzt.\n" +
          "Das Durchbrechen eines Checkpoints kann direkt mit der Anwendung tödlicher Gewalt geahndet werden, soweit die Verhältnismäßigkeit gegeben ist.",
      },
      {
        title: "§18 Offenes Tragen von Waffen",
        text: "Beamte dürfen, sofern es so vom leitenden Beamten vorgegeben ist bzw. es die Situation notwendig macht, jederzeit im Dienst ihre Dienstwaffe zu Eigen- und/oder Fremdschutz offen tragen.",
      },
    ],
  },
  {
    title: "3. Abschnitt – Zwangsmittel",
    paragraphs: [
      {
        title: "§19 Handeln auf Anordnung",
        text:
          "Jeder Polizist hat gemäß den Anordnungen seiner Vorgesetzten zu handeln, außer hierdurch wird eindeutig geltendes Gesetz verletzt.\n" +
          "Der Vorgesetzte muss auf die Unrechtmäßigkeit des Befehls aufmerksam gemacht werden. Im Zweifelsfall ist bei der Dienstaufsichtsbehörde oder der Direktion Meldung zu machen.",
      },
      {
        title: "§20 Fesselung",
        text:
          "Personen können jederzeit während einer Amtshandlung durch den Einsatz von Handschellen o. Ä. handlungsunfähig gemacht werden, wenn mindestens einer der folgenden Punkte zutrifft:\n" +
          "• Akute Bedrohungslage oder erhöhte Gefahr für den Beamten während der Diensthandlung.\n" +
          "• Bestehende Wahrscheinlichkeit einer Flucht.\n" +
          "• Bestehender Anfangsverdacht einer Straftat.\n" +
          "Die Fesselung ist sobald wie möglich wieder aufzuheben.",
      },
      {
        title: "§21 Einsatz tödlicher Gewalt",
        text:
          "Der Einsatz tödlicher Gewalt ist gestattet, um eine akute Bedrohung für das eigene Leben oder das Leben Dritter abzuwenden.\n" +
          "Das Durchbrechen/Betreten von Sperrzonen kann jederzeit unter Einsatz tödlicher Gewalt geahndet werden, insofern die Verhältnismäßigkeit gegeben ist.\n" +
          "Flüchtende Fahrzeuge können mittels Schusswaffe gestoppt werden, insofern von dem Fahrzeug eine potenziell tödliche Gefahr für die Allgemeinheit ausgeht und durch einen Schuss keine Gefahr für Insassen eben jener Fahrzeuge besteht und alle anderen Möglichkeiten ausgeschöpft wurden bzw. nicht rechtzeitig zum Erfolg führen würden.\n" +
          "Auf die Insassen von Fahrzeugen kann nur gewirkt werden, wenn das Fahrzeug als Waffe genutzt wird, die Insassen eine akute Bedrohung darstellen oder das Fahrzeug bewaffnet ist.",
      },
      {
        title: "§22 Einsatz weniger tödlicher Gewalt",
        text:
          "Der Einsatz weniger tödlicher Gewalt ist gestattet, um nicht-letalen Widerstand zu bekämpfen oder die Flucht eines Verdächtigen zu unterbinden.\n" +
          "Der Einsatz weniger tödlicher Gewalt ist, wenn hierdurch der Einsatzerfolg nicht gefährdet wird, anzukündigen.",
      },
    ],
  },
  {
    title: "4. Abschnitt – Dienstvorschriften",
    paragraphs: [
      {
        title: "§23 Dienstgruppen",
        text:
          "Die Mannschaftsdienstgrade der unteren Ebene sind grundsätzlich nicht befugt, eine Suspendierung auszusprechen.\n" +
          "Ein Lieutenant & Captain hat in seiner Aufgabe jedoch die Befugnis, Mannschaftsdienstgrade für eine maximale Dauer von 48 Stunden außer Dienst zu stellen; dies ist unverzüglich in mündlicher oder schriftlicher Form an ein Direktionsmitglied weiterzutragen.\n" +
          "Die Polizeileitung ist grundsätzlich befugt, eine Suspendierung für eine verhältnismäßige Dauer entsprechend des vorliegenden Falles auszustellen.\n" +
          "Für die Dauer einer Suspendierung steht dem betreffenden Beamten keine Gehaltsfortzahlung zu.",
      },
      {
        title: "§24 Erfassung und Priorisierung interner Dienstvorschriften",
        text:
          "Dienstvorschriften können sowohl öffentlich festgeschrieben werden als auch nichtöffentlich (interne Dienstvorschrift) festgelegt werden.\n" +
          "Hierbei gilt, dass öffentliche Dienstvorschriften im Konfliktfall Vorrang vor internen Vorschriften haben.\n" +
          "Geltendes Recht bricht Dienstvorschriften.",
      },
    ],
  },
  {
    title: "5. Abschnitt – Verwaltung",
    paragraphs: [
      {
        title: "§25 Geburtstage",
        text:
          "Polizisten dürfen an ihrem Geburtstag mit einem Polizeifahrzeug ihrer Wahl auf Streife fahren, solange dies dem Ansehen der Polizei nicht schadet und es keiner Abteilung zugewiesen ist.\n" +
          "Weiterhin besteht das Recht, an seinem eigenen Geburtstag Urlaub zu nehmen.",
      },
      {
        title: "§26 Kündigung",
        text:
          "Eine Beendigung des Arbeitsverhältnisses kann durch den Arbeitnehmer jederzeit ohne Angabe von Gründen erfolgen.\n" +
          "Ausgenommen von Abs. 1 sind Leitungsfunktionen. Hier müssen die Gründe der Leitungsebene offengelegt werden. Ein persönliches Kündigungsgespräch mit der Polizeileitung sowie die Rückgabe aller polizeilichen Gegenstände ist notwendig.",
      },
      {
        title: "§27 Entlassung",
        text:
          "Eine Beendigung des Arbeitsverhältnisses von Seite des Arbeitgebers ist nur dann zulässig, wenn disziplinarisch begründbar und verhältnismäßig.\n" +
          "Polizisten im Range Recruit, Officer in Training und Probationary Officer befinden sich in der Probezeit und sind jederzeit ohne Angabe von Gründen kündbar.\n" +
          "Eine Entlassung kann nur von der Polizeileitung ausgesprochen, jedoch ferner von einem Offizier beantragt werden. Der Antrag ist in mündlicher oder schriftlicher Form dem Chief of Police zu melden.",
      },
      {
        title: "§28 Dienstpflicht",
        text:
          "Beamte haben zwischen 17 und 23 Uhr in den aktiven Dienst zu treten.\n" +
          "Eine Ausnahme von der Dienstpflicht kann bei der Polizeileitung beantragt werden. Es gilt dann Bereitschaftsdienst.\n" +
          "Jedem Polizisten kann auf Anfrage bei der Polizeileitung eine längere Abwesenheit (Urlaub) genehmigt werden. Bei übermäßiger Nutzung oder der unabgesprochenen Verlängerung existiert ein solider Grund für eine Entlassung.",
      },
      {
        title: "§29 Bewerber",
        text:
          "Es dürfen keine Personen eingestellt werden, die rechtskräftig wegen Straftaten verurteilt wurden, solange die Urteile nicht entsprechend getilgt wurden.\n" +
          "Bewerber dürfen nicht jünger als 18 oder älter als 60 Jahre sein und müssen sowohl geistig als auch körperlich dazu in der Lage sein, den Beruf auszuüben.\n" +
          "Bewerber müssen Angaben zu früheren Anstellungen bei Behörden machen.\n" +
          "Die Entscheidung über die Aufnahme in den Polizeidienst obliegt final der Polizeileitung und der entsprechend zuständigen Abteilung.",
      },
      {
        title: "§30 Off-Duty Carry",
        text:
          "Das Tragen von polizeilichem Equipment außerhalb des Dienstes ist untersagt.\n" +
          "Ausgenommen hiervon sind: die Polizeileitung.",
      },
    ],
  },
  {
    title: "6. Abschnitt – Streifendienst",
    paragraphs: [
      {
        title: "§31 Streifenbildung",
        text:
          "Alleine eine Streife bilden ist erst ab dem Rang Corporal gestattet.\n" +
          "Eine Streife zu zweit zu bilden, ist grundsätzlich immer gestattet, sobald der Rang aller in der Streife befindlichen Beamten 2 ergibt.\n" +
          "Beispiele:\n" +
          "• Rang 1 + 2 = gestattet\n" +
          "• Rang 1 + 1 = gestattet\n" +
          "• Rang 1 + 0 = nicht gestattet\n" +
          "Eine Streife zu dritt zu bilden, ist grundsätzlich immer gestattet, sobald der Rang aller in der Streife befindlichen Beamten 2 ergibt.\n" +
          "Eine Streife zu viert zu bilden, ist nur mit Genehmigung der Leitungsebene oder bei Abteilungsarbeit gestattet.",
      },
      {
        title: "§32 Regelung des Fuhrparks",
        text: "-\n-",
      },
      {
        title: "§33 Regelung der Kleiderordnung",
        text: "",
      },
    ],
  },
];

export default function LSPDWebsite() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleOpen = (key: string) =>
    setOpenIds((s) => ({ ...s, [key]: !s[key] }));

  const renderOrgChart = () => (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>

      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-center mb-12 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          LSPD Organisationsstruktur
        </h3>

        {/* Chief */}
        <div className="flex justify-center mb-12">
          <div
            className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-xl cursor-pointer hover:from-blue-500 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-blue-500/30"
            onClick={() => setSelectedLeader(leaders[0])}
          >
            <div className="text-center">
              <div className="font-bold text-lg">Rang 12</div>
              <div className="text-sm opacity-90">Chief of Police</div>
              <div className="text-xs mt-2 font-semibold">
                {leaders[0].name}
              </div>
              <div className="text-xs opacity-75">Alter: {leaders[0].age}</div>
            </div>
          </div>
        </div>

        {/* Lines */}
        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gradient-to-b from-blue-400 to-purple-400"></div>
        </div>

        {/* Deputy Chiefs s*/}
        <div className="flex justify-center gap-12 mb-12">
          {leaders.slice(1, 3).map((leader, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-px h-8 bg-gradient-to-b from-purple-400 to-blue-400"></div>
              <div
                className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-5 rounded-xl cursor-pointer hover:from-purple-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-purple-500/30"
                onClick={() => setSelectedLeader(leader)}
              >
                <div className="text-center">
                  <div className="font-bold">Rang 11</div>
                  <div className="text-sm opacity-90">Deputy Chief</div>
                  <div className="text-xs mt-2 font-semibold">
                    {leader.name}
                  </div>
                  <div className="text-xs opacity-75">Alter: {leader.age}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lines */}
        <div className="flex justify-center gap-12 mb-4">
          <div className="w-px h-8 bg-gradient-to-b from-purple-400 to-cyan-400"></div>
          <div className="w-px h-8 bg-gradient-to-b from-purple-400 to-cyan-400"></div>
        </div>

        {/* Assistant Chiefs */}
        <div className="flex justify-center gap-6">
          {leaders.slice(3, 6).map((leader, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-px h-8 bg-gradient-to-b from-cyan-400 to-teal-400"></div>
              <div
                className="bg-gradient-to-br from-cyan-600 to-teal-700 text-white p-4 rounded-xl cursor-pointer hover:from-cyan-500 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-cyan-500/30"
                onClick={() => setSelectedLeader(leader)}
              >
                <div className="text-center">
                  <div className="font-bold text-sm">Rang 10</div>
                  <div className="text-xs opacity-90">Assistant Chief</div>
                  <div className="text-xs mt-2 font-semibold">
                    {leader.name}
                  </div>
                  <div className="text-xs opacity-75">Alter: {leader.age}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderLeaderModal = () => {
    if (!selectedLeader) return null;
    return (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 max-w-lg w-full border border-gray-700 shadow-2xl">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {selectedLeader.name}
            </h3>
            <button
              onClick={() => setSelectedLeader(null)}
              className="text-gray-400 hover:text-white text-2xl transition-colors hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <span className="font-semibold text-blue-400">Rang:</span>
              <span className="text-white ml-2">
                {selectedLeader.rank} (Rang {selectedLeader.rankNumber})
              </span>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <span className="font-semibold text-purple-400">Alter:</span>
              <span className="text-white ml-2">
                {selectedLeader.age} Jahre
              </span>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <span className="font-semibold text-cyan-400">Erfahrungen:</span>
              <div className="mt-2 space-y-1">
                {selectedLeader.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="text-gray-300 text-sm bg-gray-700/50 px-3 py-2 rounded border-l-2 border-cyan-500"
                  >
                    {exp}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <span className="font-semibold text-green-400">
                Beschreibung:
              </span>
              <p className="text-gray-300 mt-2 leading-relaxed">
                {selectedLeader.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderRegulations = () => (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Dienstvorschriften & Internes Dienstgesetz (IDG)
      </h1>
      <p className="text-center text-gray-400">(Zum Aufklappen klicken)</p>

      {dienstgesetzAbschnitte.map((abschnitt, i) => {
        const absKey = `a-${i}`;
        const isOpen = !!openIds[absKey];
        return (
          <div
            key={absKey}
            className="rounded-xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl"
          >
            <button
              onClick={() => toggleOpen(absKey)}
              className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
            >
              <span className="text-2xl font-bold text-blue-400">
                {abschnitt.title}
              </span>
              <span className="text-gray-300 text-xl">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-6">
                <div className="space-y-6">
                  {abschnitt.paragraphs.map((p, j) => {
                    const pKey = `${absKey}-p-${j}`;
                    const pOpen = !!openIds[pKey];
                    return (
                      <div
                        key={pKey}
                        className="rounded-lg border border-gray-700/60 bg-gray-900/40"
                      >
                        <button
                          onClick={() => toggleOpen(pKey)}
                          className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                        >
                          <span className="text-lg font-semibold text-purple-400">
                            {p.title}
                          </span>
                          <span className="text-gray-400">
                            {pOpen ? "−" : "+"}
                          </span>
                        </button>
                        {pOpen && (
                          <div className="px-4 pb-4">
                            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                              {p.text || "—"}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="space-y-8">
            <div className="text-center py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white rounded-2xl relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute top-12 right-8 w-1 h-1 bg-blue-300 rounded-full"></div>
                <div className="absolute bottom-8 left-12 w-1.5 h-1.5 bg-purple-300 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-cyan-300 rounded-full"></div>
                <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-blue-200 rounded-full"></div>
              </div>
              <div className="relative z-10">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Los Santos Police Department
                </h1>
                <p className="text-2xl text-blue-200 mb-4">
                  Schutz und Dienst für die Gemeinschaft
                </p>
                <p className="text-lg text-gray-300">
                  LSPD Konzept für Cold Roleplay
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">
                  Unsere Mission
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Das LSPD ist bestrebt, die höchsten Standards in der
                  Strafverfolgung zu wahren und der Gemeinschaft von Los Santos
                  mit Integrität, Professionalität und Respekt zu dienen. Unser
                  erfahrenes Führungsteam bringt jahrelange Expertise aus
                  verschiedenen Roleplay Servern mit.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-4 text-purple-400">
                  Unsere Werte
                </h2>
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-2">•</span> Integrität und
                    Ehrlichkeit
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">•</span>{" "}
                    Professionalität im Dienst
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">•</span> Respekt für
                    alle Bürger
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">•</span>{" "}
                    Gemeinschaftsorientierung
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Warum sind wir die geeigneten Leader?
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Unserer Meinung nach sind wir als Leader für eine staatliche
                Fraktion geeignet, aufgrund der bisherigen Erfahrung &
                Motivation aller im Konzept stehenden Personen. Jeder kann schon
                Erfahrungen auf diversen Servern vorweisen, die alle zu ihren
                Primezeiten über 300 Spielern hatten.
              </p>
              <br />
              <p className="text-gray-300 leading-relaxed">
                Alle in der Vorstellung stehenden Personen wissen, worauf es
                ankommt, eine Staatsfraktion zu leiten: Enge Zusammenarbeit mit
                dem Team, strukturierter & gut durchdachter Aufbau, gute
                Artikulation, Durchsetzungsvermögen, Vorbildfunktion und
                Aktivität.
              </p>
            </div>
          </div>
        );
      case "leadership":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                LSPD Führung
              </h1>
              <p className="text-gray-400 text-lg">
                Klicke auf die Ränge für weitere Informationen
              </p>
            </div>
            {renderOrgChart()}
          </div>
        );
      case "departments":
        return (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Abteilungen
            </h1>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-blue-400">
                  Training & Recruitment Division
                </h3>
                <p className="text-gray-300">
                  Die Training & Recruitment Division ist für die Trainings,
                  Aus- & Weiterbildungen sowie die Bewerbungsgespräche im LSPD
                  zuständig. Sie dient nicht nur wie auf den meisten Servern
                  dazu, die Prüfungen für Rankups zu absolvieren, sondern führt
                  auch Trainings mit den Beamten durch. Das bedeutet, sollte ein
                  Beamter sich in einer Sache wie zum Beispiel dem 10-80 callen
                  unsicher sein, kann dieser auf die Training Division zugehen
                  und ein Training absolvieren. Insgesamt wird die Training &
                  Recruitment Division bei uns als eine Abteilung dargestellt
                  die sich intern wie folgt aber aufteilen wird: Training;
                  Ausbildungen, Weiterbildungen, Academy, Bewerbungsgespräche,
                  Streifendienstüberprüfung
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-purple-400">
                  Dienstaufsicht
                </h3>
                <p className="text-gray-300">
                  Die Dienstaufsicht ist nicht zu verwechseln mit dem
                  Beschwerdemanagement oder dem Detective Bureau. Sie leitet den
                  Streifendienst und koordiniert diesen bei Einsätzen. Zudem ist
                  die Dienstaufsicht dafür zuständig, dass jeder Beamte die
                  entsprechenden Vorgaben erfüllt und die
                  Mindestqualitätsstandards einhält. Beispielsweise führt diese
                  gemeinsam mit der Training & Recruitment Division
                  Streifendienstüberprüfungen durch und bewertet anhand dieser,
                  ob der jeweilige Beamte gewisse Trainings braucht oder die
                  Standards erfüllt werden.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-cyan-400">
                  Beschwerdemanagement
                </h3>
                <p className="text-gray-300">
                  Das Beschwerdemanagement nimmt Beschwerden sowohl von der
                  Bevölkerung als auch den eigenen Beamten ggü. Beamte des
                  LSPD´s auf und bearbeitet diese.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-green-400">
                  Traffic Control
                </h3>
                <p className="text-gray-300">
                  Die Abteilung Traffic Control führt groß angelegte Checkpoints
                  durch und ist im Allgemeinen mehr für die Straßenüberwachung
                  zuständig. Je nach Features wird diese für das Blitzen oder
                  für die Verkehrsbeobachtung aus der Luft mit der Helikopter
                  Kamera (wenn Erfassung mit km/h Anzeige vorhanden wie auf
                  Sibaui) zum Einsatz kommen.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 md:col-span-2">
                <h3 className="text-xl font-bold mb-3 text-red-400">
                  SWAT (Optional)
                </h3>
                <p className="text-gray-300">
                  Sollte ein SWAT vorhanden sein und dem LSPD die Leitung dafür
                  gegeben werden, würde dies natürlich auch als feste Abteilung
                  dazu zählen.
                </p>
              </div>
            </div>
          </div>
        );
      case "regulations":
        return renderRegulations();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white shadow-2xl border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <img
                  src="/Logo_LSPD.webp"
                  alt="LSPD Logo"
                  className="w-12 h-12"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Los Santos Police Department
                </h1>
                <p className="text-blue-300 text-sm">
                  Konzept LSPD • Cold Roleplay
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="border-t border-gray-700/50">
            <div className="flex space-x-8 py-4">
              {[
                { id: "home", label: "Startseite" },
                { id: "leadership", label: "Führung" },
                { id: "departments", label: "Abteilungen" },
                { id: "regulations", label: "Vorschriften" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">{renderContent()}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-8 mt-16 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2025 Los Santos Police Department - Jay Hartnuss
          </p>
        </div>
      </footer>

      {/* Leader Modal */}
      {renderLeaderModal()}
    </div>
  );
}

CREATE TABLE IF NOT EXISTS progression(id INTEGER PRIMARY KEY AUTOINCREMENT, Exercice_id INTEGER, poid VARCHAR(16), req VARCHAR(16), note TEXT);
    INSERT INTO progression 
        (Exercice_id, poid, req, note)
    VALUES    
        (1, 45, 6, "top"),
        (2, 45, 20, "top"),
        (3,  70, 10, "top"),
        (4, 45, 19, "top"),
        (5, 55, 7, "top"),
        (6, 60, 6, "top"),
        (7, 40, 6, "top"),
        (8, 60, 9, "top"),
        (9, 22, 9, "top"),
        (10, 7.5, 19, "top"),
        (11, 5, 18, "top"),
        (12, 45, 18, "top"),
        (13, 25, 15, "top"),
        (14, 65, 10, "top"),
        (15, 26, 9, "top"),
        (16, 15, 20, "top"),
        (17, 110, 7, "top"),
        (18, 25, 12, "top"),
        (19, 7.5, 16, "top"),
        (20, 100, 18, "top"),
        (21, 20, 6, "top"),
        (22, 14, 6, "top"),
        (20, 5, 18, "top"),
        (20, 5, 18, "top"),
        (20, 12, 8, "top"),
        (20, 27.5, 10, "top"),
        (20, 27.5, 15, "top"),
        (20, 0, 15, "top"),
        (20, 0, 0, "top");

CREATE TABLE IF NOT EXISTS seance (id INTEGER, jour VARCHAR(16), libeller_long VARCHAR(16), libeller_court VARCHAR(2));
    INSERT INTO seance 
        (id, jour, libeller_long, libeller_court) 
    VALUES
        (1, 'Dimanche', 'Seance 1', 'S1'),
        (2, 'Mardi', 'Seance 2', 'S2'),
        (3, 'Mercredi', 'Seance 3', 'S3'),
        (4, 'Jeudi', 'Seance 4', 'S4'),
        (5, 'vendredi', 'Seance 5', 'S5');


CREATE TABLE IF NOT EXISTS exercice (id INTEGER, Seance_id INTEGER, libeller_long VARCHAR(16), libeller_court VARCHAR(2), serie VARCHAR(16), req_min  INTEGER, req_max INTEGER, pause_min  INTEGER, pause_max INTEGER);

    INSERT INTO exercice 
        (id, Seance_id, libeller_long, libeller_court, serie, req_min, req_max, pause_min, pause_max) 
    VALUES
        (1, '1', 'Squat Avant', 'Squat Avant', '4', '6', '10', 120, 180),
        (2, '1', 'Leg extension', 'Leg extension', '3', '15', '20', 60, 60),
        (3, '1', 'Soulevé de terre jambes tendu', 'Soulevé de terre jambes tendu', '4', '6', '10', 120, 180),
        (4, '1', 'leg Curl assis', 'leg Curl assis', '3', '15', '20', 60, 60),
        (5, '1', 'Traction', 'Traction', '3', '6', '10', 120, 180),
        (6, '1', 'Mollet debout', 'Mollet debout', '3', '15', '15', 60, 60),
        (7, '1', 'Mollet assis', 'Mollet assis', '3', '15', '15', 60, 60),
        (8, '2', 'Développé couché', 'Développé couché', '4', '6', '10', 120, 180),
        (9, '2', 'Développé incliné 45° haltéres', 'Développé incliné 45° haltéres', '4', '6', '10', 90, 160),
        (10, '2', 'Ecartés poulie basses', 'Ecartés poulie basses', '3', '15', '20', 60, 60),
        (11, '2', 'L-fly à poulie', 'L-fly à poulie', '3', '15', '20', 60, 60),
        (12, '2', 'Rowing horizontale sur machine avec coude ecarté pris pronation', 'Rowing horizontale sur machine avec coude ecarté pris pronation', '3', '15', '20', 60, 60),
        (13, '2', 'Crunch à la poulie haute', 'Crunch à la poulie haute', '3', '15', '20', 30, 30),
        (14, '3', 'cardio', 'cardio', '3', '1', '1',0,0),
        (15, '4', 'Rowing Yates  buste à 90° prise pronation à la barre', 'Rowing Yates  buste à 90° prise pronation à la barre', '3', '6', '10', 120, 180),
        (16, '4', 'Rowing haltéres unilatérale prise neutre avec buste à 90°', 'Rowing haltéres unilatérale prise neutre avec buste à 90°', '4', '6 ', '10', 90, 160),
        (17, '4', 'Tirage horizontale supination à la poulie', 'Tirage horizontale supination à la poulie', '3', '15', '20', 60, 60),
        (18, '4', 'Dips lesté', 'Dips lesté', '3', '6', '10', 120, 180),
        (19, '4', 'Barre au front', 'Barre au front', '3', '8 ', '12', 90, 160),
        (20, '4', 'Tirage debout à la poulie haute unilatérale prise neutre', 'Tirage debout à la poulie haute unilatérale prise neutre', '3', '15', '20', 60, 60),
        (21, '4', 'Presse à cuisses jambes basse', 'Presse à cuisses jambes basse', '3', '15', '20', 90, 160),
        (22, '5', 'Développé militaire Haltéres assis', 'Développé militaire Haltéres assis', '4', '6', '10', 120, 180),
        (23, '5', 'Elévation laterales haltéres', 'Elévation laterales haltéres', '3', '8', '15', 90, 160),
        (24, '5', 'Oiseau à la poulie haute', 'Oiseau à la poulie haute', '3', '15', '20', 60, 60),
        (25, '5', 'L-fly à poulie', 'L-fly à poulie', '3', '15', '20', 60, 60),
        (26, '5', 'Curl haltére sur banc inclinés', 'Curl haltére sur banc inclinés', '3', '6', '10', 60, 60),
        (27, '5', 'Curl marteau assis sur dossier', 'Curl marteau assis sur dossier', '3', '8', '12', 90, 160),
        (28, '5', 'Crunch à la poulie haute', 'Crunch à la poulie haute', '3', '15', '20', 30, 30),
        (29, '5', 'Lever de jambes', 'Lever de jambes', '3', '15', '20', 30, 30),
        (30, '5', 'Planche', 'Planche', '3', '1', '1', 30, 30);
	

CREATE TABLE IF NOT EXISTS echauffement(id INTEGER, poid INTEGER, req VARCHAR(16), pause VARCHAR(16));

    INSERT INTO echauffement 
        (id, poid, req, pause) 
    VALUES
        (0, '0', '0', '0'),
        (1, '0', '20', '60'),
        (2, '30', '15', '90'),
        (3, '40', '10', '120'),
        (4, '0', '20', '60'),
        (5, '40', '15', '90'),
        (6, '60', '10', '12'),
        (7, '0', '20', '60'),
        (8, '40', '15', '90'),
        (9, '60', '10', '120'),
        (10, '0', '20', '60'),
        (11, '40', '15', '90'),
        (12, '60', '10', '120'),
        (13, '0', '20', '60'),
        (14, '10', '15', '90'),
        (15, '0', '20', '60'),
        (16, '50', '15', '90'),
        (17, '80', '10', '120'),
        (18, '0', '20', '60'),
        (19, '4', '15', '90'),
        (20, '6', '10', '120'),
        (21, '5', '15', '60'),
        (22, '8', '10', '120'),
        (23, '5', '30', '0'),
        (24, '5', '30', '0'),
        (25, '5', '30', '0');	

CREATE TABLE IF NOT EXISTS types_muscles(id INTEGER, libeller_long VARCHAR(16));

    INSERT INTO types_muscles 
        (id, libeller_long) 
    VALUES
        (1, 'Quadriceps'),
        (2, 'Ischios'),
        (3, 'Dos'),
        (4, 'Mollet'),
        (5, 'Grand pectoral'),
        (6, 'Petit pectoral'),
        (7, 'Deltoide Postérieur'),
        (8, 'Deltoide externe'),
        (9, 'Abdos'),
        (10, 'Grand Dorsal'),
        (11, 'Dorsal latéral'),
        (12, 'Pectoreaux'),
        (13, 'Triceps'),
        (14, 'Jambes'),
        (15, 'Deltoide'),
        (16, 'Deltoide Latérale'),
        (17, 'Biceps');
        
CREATE TABLE IF NOT EXISTS seance_exercice_types_muscles_echauffement(id INTEGER PRIMARY KEY AUTOINCREMENT, seance_id INTEGER, exercice_id INTEGER, echauffement_id INTEGER);

    INSERT INTO seance_exercice_types_muscles_echauffement 
        (seance_id, exercice_id, echauffement_id) 
    VALUES
        (1,0,23),
        (1,0,24),
        (1,0,25),
        (1,0,26),
        (1,1,1),
        (1,1,1),
        (1,1,2),
        (1,1,3),
        (1,2,0),
        (1,3,4),
        (1,3,5),
        (1,3,6),
        (1,4,0),
        (1,5,0),
        (1,6,0),
        (1,7,0),
        (2,8,7),
        (2,8,8),
        (2,8,9),
        (2,9,0),
        (2,10,0),
        (2,11,0),
        (2,12,0),
        (2,13,0),
        (3,14,0),
        (4,15,10),
        (4,15,11),
        (4,15,12),
        (4,16,0),
        (4,17,0),
        (4,18,13),
        (4,18,14),
        (4,19,0),
        (4,20,0),
        (4,21,15),
        (4,21,16),
        (4,21,17),
        (5,22,18),
        (5,22,19),
        (5,22,20),
        (5,23,0),
        (5,24,0),
        (5,25,0),
        (5,26,21),
        (5,26,22),
        (5,27,0),
        (5,28,0),
        (5,29,0),
        (5,30,0);
	


+" SELECT DISTINCT seance.libeller_long, exercice.libeller_long, exercice.serie, exercice.req_min,"
+"   exercice.req_max, pause_min, pause_max, progression.poid, progression.req, echauffement.poid, echauffement.req,"
+"   echauffement.pause"
+" FROM seance_exercice_types_muscles_echauffement"
+" inner join exercice"
+" inner join seance"
+" inner join echauffement"
+" inner join progression"
+" on exercice.id=seance_exercice_types_muscles_echauffement.exercice_id"
+" and seance.id=seance_exercice_types_muscles_echauffement.seance_id"
+" and echauffement.id=seance_exercice_types_muscles_echauffement.echauffement_id"
+" and progression.id=( SELECT id FROM progression where exercice_id=exercice.id   ORDER BY poid DESC, req DESC LIMIT 1 )"
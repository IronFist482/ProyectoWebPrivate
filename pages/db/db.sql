CREATE TABLE cuenta(
    id_cuenta INT NOT NULL AUTO_INCREMENT,
    nom_cue VARCHAR(45) NOT NULL,
    apP_cue VARCHAR(45) NOT NULL,
    apM_cue VARCHAR(45) NOT NULL,
    cor_cue VARCHAR(50) NOT NULL,
    con_cue VARBINARY(8000) NOT NULL,
    PRIMARY KEY (id_cuenta)
);
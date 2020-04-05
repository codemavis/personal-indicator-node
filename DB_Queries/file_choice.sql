-- Table: public.file_choice

-- DROP TABLE public.file_choice;

CREATE TABLE public.file_choice
(
    choice_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    choice_desc text COLLATE pg_catalog."default",
    CONSTRAINT file_choice_pkey PRIMARY KEY (choice_id)
)

TABLESPACE pg_default;

ALTER TABLE public.file_choice
    OWNER to postgres;
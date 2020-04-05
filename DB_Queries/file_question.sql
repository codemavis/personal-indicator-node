-- Table: public.file_question

-- DROP TABLE public.file_question;

CREATE TABLE public.file_question
(
    question_id integer NOT NULL,
    question_desc text COLLATE pg_catalog."default",
    CONSTRAINT file_question_pkey PRIMARY KEY (question_id)
)

TABLESPACE pg_default;

ALTER TABLE public.file_question
    OWNER to postgres;
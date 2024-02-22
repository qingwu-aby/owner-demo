CREATE TABLE
  public.poetry (
    id uuid NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    author_id uuid NOT NULL,
    title character varying(255) NULL,
    pinyin text[] NULL,
    paragraphs text[] NULL,
    rhythm_id uuid NOT NULL,
    chapter character varying(255) NULL,
    section character varying(255) NULL
  );

ALTER TABLE
  public.poetry
ADD
  CONSTRAINT poetry_pkey PRIMARY KEY (id)

-- 
CREATE TABLE
  public.poetry_name (
    id uuid NOT NULL DEFAULT gen_random_uuid (),
    author_name character varying(255) NULL,
    dynastry character varying(255) NULL,
    author_desc character varying(255) NULL,
    created_at timestamp without time zone NOT NULL DEFAULT now()
  );

ALTER TABLE
  public.poetry_name
ADD
  CONSTRAINT poetry_name_pkey PRIMARY KEY (id)

-- 
CREATE TABLE
  public.rhythm (
    id uuid NOT NULL DEFAULT gen_random_uuid (),
    type
      rhythm_type NULL,
      created_at timestamp without time zone NOT NULL DEFAULT now(),
      content text[] NULL
  );

ALTER TABLE
  public.rhythm
ADD
  CONSTRAINT rhythm_pkey PRIMARY KEY (id)
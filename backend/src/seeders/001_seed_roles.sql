INSERT INTO roles (name) VALUES
  ('Superadmin'),
  ('Admin'),
  ('Staff')
ON CONFLICT (name) DO NOTHING;

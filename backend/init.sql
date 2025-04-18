CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
  -- created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Insert some test data
-- INSERT INTO users (name, email)
-- VALUES 
--   ('kumail', 'kumail@gmail.com'),
--   ('hamza', 'hamza@gmail.com')
-- ON CONFLICT (email) DO NOTHING;
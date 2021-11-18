import psycopg2 as pg

conn = pg.connect(
    host="192.168.128.220:5432",
    database="seguimiento_claro_proactivo",
    user="postgres",
    password="")

print(conn)
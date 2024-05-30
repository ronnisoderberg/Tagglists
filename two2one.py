from xls2xlsx import convert_xls_to_xlsx , read_xlsx
from openpyxl import Workbook

convert_xls_to_xlsx('L070n087_SET_Export.xls', 'L070n087_SET_Export.xlsx')

read_xlsx('L070n087_SET_Export.xlsx')

scadaLista = Workbook()

ws1 = scadaLista.create_sheet('Tagglista', 0)
ws2 = scadaLista.create_sheet('Larm')

scadaLista.save('scadaLista.xlsx')


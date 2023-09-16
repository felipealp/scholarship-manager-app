import PropTypes from 'prop-types';
import React, { useState } from 'react';

// material-ui
import { DataGrid } from '@mui/x-data-grid';
import { TextField, IconButton, InputAdornment } from '@mui/material';

import Search from '@mui/icons-material/Search';
import Add from '@mui/icons-material/Add';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';

// project imports
import MainCard from 'components/cards';
import Dialog from 'components/dialog';

const List = ({ title, urlRegister, handleDelete, columns, rows }) => {
  const [searchText, setSearchText] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) => String(value).toLowerCase().includes(searchText.toLowerCase()))
  );

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleEditClick = (item) => {
    window.location.href = `${urlRegister}/${item.id}`;
  };

  const handleDeleteClick = () => {
    handleDelete(itemSelected);
    setOpenDialog(false);
  };

  const customLocaleText = {
    noRowsLabel: 'Nenhum item encontrado',
    footerRowSelected: (count) => `${count} item(s) selecionado(s)`,
    toolbarDensity: 'Densidade',
    toolbarDensityLabel: 'Densidade',
    toolbarDensityCompact: 'Compacta',
    toolbarDensityStandard: 'Padrão',
    toolbarDensityComfortable: 'Confortável',
    columnMenuLabel: 'Menu da Coluna',
    columnMenuShowColumns: 'Mostrar Colunas',
    columnMenuFilter: 'Filtrar',
    columnMenuSortAscending: 'Ordenar Ascendente',
    columnMenuSortDescending: 'Ordenar Descendente',
    columnMenuRemoveColumn: 'Remover Coluna',
    columnMenuFilterOptions: 'Opções de Filtro',
    columnMenuFilterValueEquals: 'Igual',
    columnMenuFilterValueNotEqual: 'Não Igual',
    columnMenuFilterValueContains: 'Contém',
    columnMenuFilterValueStartsWith: 'Começa com',
    columnMenuFilterValueEndsWith: 'Termina com',
    columnMenuFilterValueLessThan: 'Menor que',
    columnMenuFilterValueGreaterThan: 'Maior que',
    columnMenuFilterValueIs: 'É',
    columnMenuFilterValueNot: 'Não'
  };

  const columnsWithActions = [
    ...columns,
    {
      field: 'actions',
      headerName: 'Menu de Ações',
      width: 200,
      flex: 1,
      align: 'right',
      headerAlign: 'right',
      renderCell: (params) => (
        <div>
          <IconButton aria-label="Editar" onClick={() => handleEditClick(params.row)}>
            <Edit />
          </IconButton>
          <IconButton
            aria-label="Excluir"
            onClick={() => {
              setItemSelected(params.row);
              setOpenDialog(true);
            }}
          >
            <Delete />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <MainCard title={title}>
      <Dialog
        open={openDialog}
        title="Tem certeza?"
        text="Essa operação não tem volta, deseja realmente continuar?"
        handleClose={() => {
          setOpenDialog(false);
        }}
        handleConfirm={handleDeleteClick}
      />
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '36px' }}>
        <TextField
          id="search"
          label="Buscar por qualquer campo"
          variant="outlined"
          value={searchText}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search color="action" />
              </InputAdornment>
            ),
            style: { borderRadius: '8px', color: 'white' },
          }}
          fullWidth
        />
        <IconButton
          style={{ backgroundColor: '#1e88e5', marginLeft: '16px' }}
          aria-label="Adicionar"
          onClick={() => {
            window.location.href = urlRegister;
          }}
        >
          <Add style={{ color: 'white' }} />
        </IconButton>
      </div>
      <div style={{ height: 'auto', width: '100%' }}>
        <DataGrid
          rows={filteredRows}
          rowHeight={40}
          autoHeight
          columns={columnsWithActions}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 }
            }
          }}
          slotProps={{
            pagination: {
              labelRowsPerPage: 'Items por página:'
            }
          }}
          localeText={customLocaleText}
          pageSizeOptions={[5, 10, 15, 20]}
        />
      </div>
    </MainCard>
  );
};

List.propTypes = {
  title: PropTypes.string,
  urlRegister: PropTypes.string,
  handleDelete: PropTypes.func,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string,
      headerName: PropTypes.string
    })
  ),
  rows: PropTypes.arrayOf(PropTypes.object)
};

export default List;

import { useEffect, useState, useCallback } from 'react';
import {
  getBrands,
  getModels,
  getYears,
  getVersions,
  getCar,
  TYPES_REQUEST,
} from '@modules/main/services/creditas';
import { FORM_KEYS } from '@modules/main/utils';

const useCreditas = () => {
  const INITIAL_STATE_RESPONSE = {
    brands: [],
    models: [],
    years: [],
    versions: [],  
    getCar: {},
    car_information: {},
  };
  const INITIAL_DATA = {
    brands_selected: null,
    models_selected: null,
    years_selected: null,
    versions_selected: {
      versionId: '',
      version: '',
    },   
  };

  const [form, setForm] = useState(INITIAL_DATA);
  const [response, setResponse] = useState(INITIAL_STATE_RESPONSE);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const updateForm = useCallback(
    ({ key, value }) => {
      const object = {
        [FORM_KEYS.BRAND]: {
          response: {
            [TYPES_REQUEST.MODELS]: [],
            [TYPES_REQUEST.YEARS]: [],
            [TYPES_REQUEST.VERSIONS]: [],
          },
          fields: {
            models: [],
            years: [],
            versions: [],  
          }
        },
        [FORM_KEYS.MODEL]: {
          response: {
            [TYPES_REQUEST.YEARS]: [],
            [TYPES_REQUEST.VERSIONS]: [],
          },
          fields: {
            years: [],
            versions: [],  
          }
        },
        [FORM_KEYS.YEAR]: {
          response: {
            [TYPES_REQUEST.VERSIONS]: [],
          },
          fields: {
            versions: [],  
          }
        },
        [FORM_KEYS.VERSION]: {
          response: {
            [TYPES_REQUEST.VERSIONS]: [],
          },
          fields: {
            versions: [],  
          }
        },
      }
      setForm({ ...form, ...object[key].fields, [key]: value });
      updateResponse({resetFields: object[key].response})
    },
    [form, setForm]
  );

  const updateResponse = useCallback(
    ({ key, value, resetFields }) => {
      if (key) {
        return setResponse({ ...response, [key]: value });
      }
      return setResponse({ ...response, ...resetFields });
    },
    [response, setResponse]
  );

  const getData = useCallback(
    async (type, params) => {
      try {
        const service = {
          [TYPES_REQUEST.BRANDS]: () => getBrands(),
          [TYPES_REQUEST.MODELS]: (dataParam) => getModels(dataParam),
          [TYPES_REQUEST.VERSIONS]: (dataParam) => getVersions(dataParam),
          [TYPES_REQUEST.YEARS]: (dataParam) => getYears(dataParam),
          [TYPES_REQUEST.CAR_DETAIL]: (dataParam) => getCar(dataParam),
        };
        setLoading(true);
        const data = await service[type](params);
        updateResponse({ key: type, value: data });
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setErrors(e.message);
      }
    },
    [updateResponse]
  );

  const clearCar = () => {
    setForm(INITIAL_DATA);
  };

  const buildForm = useCallback(() => {
    const {
      brands_selected: brand,
      models_selected: model,
      years_selected: year,
      versions_selected: version,
    } = form;
    return {
      brand,
      model,
      year,
      version: {
        versionId: version.versionId,
        version: version.version,
      },
    };
  }, [form]);

  const getRequestType = useCallback(() => {
    const {
      brands_selected: brand,
      models_selected: model,
      years_selected: year,
      versions_selected: version
    } = form;

    if (brand && !model) {
      return TYPES_REQUEST.MODELS;
    }
    if (brand && model && !year) {
      return TYPES_REQUEST.YEARS;
    }
    if (brand && model && year && !version.version && !version.versionId) {
      return TYPES_REQUEST.VERSIONS;
    }
    if (brand && model && year && version) {
      return TYPES_REQUEST.CAR_DETAIL;
    }
    return TYPES_REQUEST.BRANDS;
  }, [form]);

  useEffect(() => {
    getData(TYPES_REQUEST.BRANDS);
  }, []);

  useEffect(() => {
    const formData = buildForm();
    const type = getRequestType()
    if (type) getData(type, formData);
  }, [buildForm]);

  return {
    models: {
      response,
      form,
      loading,
      errors,
      userChoose: buildForm(),
    },
    operations: {
      updateForm,
      populateSelect: {
        brand: () => getData(TYPES_REQUEST.BRANDS),
        model: () => getData(TYPES_REQUEST.MODELS),
        year: () => getData(TYPES_REQUEST.YEARS),
        version: () => getData(TYPES_REQUEST.VERSIONS),
      },
      clearCar,
    },
  };
};

export default useCreditas;

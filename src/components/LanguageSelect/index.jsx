import { useEffect, useState} from 'react'
import Select from 'react-select';
import { useTranslation } from "react-i18next";
import { selectStyles } from './selectStyles';

export const LanguageSelect = () => {
   const { i18n } = useTranslation();
  const [selectedLng, setSelectedLng] = useState(localStorage.getItem("i18nextLng")?? "uk")
  
	useEffect(() => {
		if (selectedLng) {
			i18n.changeLanguage(selectedLng);
		}
	}, [i18n, selectedLng]);

	const handleLanguageChange = (selectOpt) => {
    i18n.changeLanguage(selectOpt.value);
    setSelectedLng(selectOpt.value)
    localStorage.setItem("i18nextLng", selectOpt.value)
  };
  
    const options = [
            {
          value: 'en',
          label: 'EN'
        },
       
        {
          value: 'uk',
          label: 'UA'
        },
      ]
  return (
     <Select
            value={options.value}
            onChange={handleLanguageChange}
            options={options}
            defaultValue = {options.find(({value})=>value === selectedLng)}
                        styles={selectStyles}

          />
  )
}


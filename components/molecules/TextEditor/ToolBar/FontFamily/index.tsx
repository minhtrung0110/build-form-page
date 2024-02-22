// Libraries
import React, { useEffect, useState } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Components


// Types
interface FontFamilyProps {
  preselectedFont?: { label?: string; name: string };
  whitelist: Array<{ label?: string; name: string }>;

  onChange?: (option: { label?: string; name: string }) => void;
}

export const FontFamily: React.FC<FontFamilyProps> = props => {
  // Hooks
  //const { t } = useTranslation();

  // Props
  const { preselectedFont, whitelist, onChange } = props;

  // States
  const [selectedFont, setSelectedFont] = useState<{ label?: string; name: string }>(whitelist[0]);

  // Initial Effects
  useEffect(() => {
    if (preselectedFont && preselectedFont.name !== selectedFont.name) {
      setSelectedFont(preselectedFont);
    }
  }, [preselectedFont]);

  // Handlers
  const onClickOptions = (option: any) => {
    setSelectedFont(option);
    console.log('Click Options:', option);
    if (onChange) {
      onChange(option);
    }
  };
  // const handleValueChange=(value:string)=>{
  //   setSelectedFont(value)
  // }


  return (
    <Select onValueChange={onChange}>
      <SelectTrigger
        className='!w-28 !h-6 !flex !justify-center !items-center  !border-solid !border !rounded-sm !border-gray-200'>
        <SelectValue placeholder='Fonts' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fonts:</SelectLabel>
          {whitelist.map((font, index) => (
            <SelectItem
              //className={classnames({ selected: font.name === selectedFont.name })}
              style={{ fontFamily: font.name }}
              key={index}
              // onClick={() => onClickOptions(font)}
              value={font.name}>
              {font.label || font.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>

  );
};

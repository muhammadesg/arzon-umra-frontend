import React, { useState } from 'react';
import styles from "./PackagesCards.module.scss";
import Card from '@/components/Card';
import { Select } from 'antd';
import { CardInterface } from '@/components/Types';
import { OptionsInterface } from '../../Types';
import { API } from '@/services/api';

const { Option } = Select;

interface Props {
  data: CardInterface[];
  optionsData: OptionsInterface;
}

const PackagesCards = ({ data, optionsData }: Props) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [toursCards, setToursCards] = useState(data)
  const [filters, setFilters] = useState({
    avia_id: null,
    ticket_type_id: null,
    company_id: null,
    hotel_distance: null,
  });
  
  const handleFilterChange = (value: string | number, key: keyof typeof filters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };  

  const showMoreCards = () => {
    setVisibleCount(data?.length);
  };

  const buildQueryString = (params: Record<string, string | number | null>) => {
    const query = new URLSearchParams();
    
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        query.append(key, value.toString());
      }
    });
  
    return query.toString();
  };
  

  const fetchFilteredPackages = async () => {
    const queryString = buildQueryString(filters);
    try {
      const filteredData = await API.getToursSearch(queryString);
      setToursCards(filteredData)
      console.log("Filtered Packages:", filteredData);
    } catch (error) {
      console.error("Error fetching filtered packages:", error);
    }
  };
  

  return (
    <div className={styles.packages}>
      <div className={`${styles.packages__inner} container`}>
        <div className={styles.packages__nav}>
          <Select
            placeholder="Avia kompaniyalar"
            className={styles.pack_select}
            onChange={(value) => handleFilterChange(value, "avia_id")}
          >
            {
              optionsData?.avia_companies.map((item, idx) => (
                <Option key={idx} value={item.id}>{item.name}</Option>
              ))
            }
          </Select>

          <Select
            placeholder="To’plam turi"
            className={styles.pack_select}
            onChange={(value) => handleFilterChange(value, "ticket_type_id")}
          >
            {
              optionsData?.tour_types.map((item, idx) => (
                <Option key={idx} value={item.id}>{item.name}</Option>
              ))
            }
          </Select>

          <Select
            placeholder="Tur firmalar"
            className={styles.pack_select}
            onChange={(value) => handleFilterChange(value, "company_id")}
          >
            {
              optionsData?.tour_companies.map((item, idx) => (
                <Option key={idx} value={item.id}>{item.name}</Option>
              ))
            }
          </Select>

          <Select
            placeholder="2 Haramdan Mehmonxona Masofasi"
            className={styles.pack_select}
            onChange={(value) => handleFilterChange(value, "hotel_distance")}
          >
            {
              optionsData?.hotel_distances.map((item, idx) => (
                <Option key={idx} value={item}>{item}</Option>
              ))
            }
          </Select>

          <button className={styles.packages__nav_button} onClick={fetchFilteredPackages}>Saralash</button>
        </div>

          {
            toursCards && toursCards.length > 0 ?(
              <div className={styles.packages__cards}>
                {
                  toursCards.slice(0, visibleCount).map((item, idx) =>(
                    <Card key={idx} data={item}/>
                  ))
                }
              </div>
            ) : (
              <div className={styles.packages__empty}>
                <p>Afsus! Mos keladigan sayohatlar topilmadi</p>
              </div>
            )
          }
        
        <div className={styles.packages__btn_content}>
          {visibleCount < data?.length && (
            <button className={styles.packages__btn} onClick={showMoreCards}>
              Ko’proq ko’rsatish
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default PackagesCards
import React from 'react';
import styles from "./EconomicAdvantage.module.scss";
import { Button, Form, Input, message } from 'antd';
import { DetailSendContact, TravelPackageInterface } from '../../Types';
import { API, BASE_URL_IMAGES } from '@/services/api';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { MaskedInput } from 'antd-mask-input';
import { AxiosError } from 'axios';

interface Props {
    data: TravelPackageInterface;
}

const EconomicAdvantage = ({ data }: Props) => {
    const [form] = Form.useForm();
    const { query } = useRouter();
    const packageId = query.id ? Number(query.id) : undefined;

    const onFinish = (values: DetailSendContact) => {
        console.log("Form Submitted:", values);
        const formData = {
            ...values,
            package_id: packageId,
        };
        mutate(formData);
        form.resetFields();
    };

    const { mutate } = useMutation({
        mutationFn: async (data: DetailSendContact) => await API.postSendDetailContact(data),
        onSuccess: () => {
            message.success("Malumotingiz muffaqiyatli yuborildi");
            form.resetFields();
        },
        onError: (error: AxiosError) => {
            message.error(error.message);
        },
    });
    
  return (
    <div className={styles.economic_ad}>
        <div className={`${styles.economic_ad__inner} container`}>
            <h2 className={styles.economic_ad__title} data-aos="fade-up">Avzalligi</h2>
            <div className={styles.economic_ad__cards}>
                {
                    data?.advantages.map((item, idx) => (
                        <div data-aos="fade-up" data-aos-delay={idx + 100} className={styles.economic_ad__card} key={idx}>
                            <div className={styles.economic_ad__card_image}>
                                <img src={BASE_URL_IMAGES + item.icon_name} alt=""/>
                            </div>

                            <p>{item.name}</p>
                        </div>
                    ))
                }
            </div>

            <div className={styles.economic_ad__form} data-aos="fade-up">
                <div className={styles.economic_ad__form_price}>
                    <p>Buyurtma qilish</p>
                    <span>{data?.price}$ dan boshlab</span>
                </div>
                <Form onFinish={onFinish} form={form}>
                    <div className={styles.economic_ad__form_title}>
                        <h3>To’liq ismingiz</h3>
                        <Form.Item
                            name="name"
                            rules={[
                                { required: true, message: "Iltimos, ismingizni kiriting!" },
                            ]}
                        >
                            <Input className={styles.economic_ad__form_input} placeholder="To’liq ismingiz" />
                        </Form.Item>
                    </div>

                    {/* Phone Number Input */}
                    <div className={styles.economic_ad__form_title}>
                        <h3>Telefon raqamingiz</h3>

                        <Form.Item
                            name="phone"
                            rules={[
                                { required: true, message: "Iltimos, telefon raqamingizni kiriting!" },
                                // { pattern: /^[0-9]+$/, message: "Faqat raqamlar kiriting!" },
                            ]}
                        >
                            <MaskedInput
                                className={styles.economic_ad__form_input}
                                mask={'+998 00 000 00 00'}
                                required
                            />
                        </Form.Item>
                    </div>

                    {/* Pilgrim Input */}
                    <div className={styles.economic_ad__form_title}>
                        <h3>Ziyoratchilar soni</h3>
                        <Form.Item
                            name="count"
                            rules={[
                                { required: true, message: "Iltimos, telefon raqamingizni kiriting!" },
                                { pattern: /^[0-9]+$/, message: "Faqat raqamlar kiriting!" },
                            ]}
                        >
                            <Input className={styles.economic_ad__form_input} placeholder="Ziyoratchilar soni" />
                        </Form.Item>
                    </div>
                    
                    {/* Submit Button */}
                    <Form.Item>
                        <Button className={styles.economic_ad__form_btn} type="primary" htmlType="submit" block>
                            Buyurtma berish
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default EconomicAdvantage
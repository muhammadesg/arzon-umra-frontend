import React, { useState } from 'react'
import styles from "./Navbar.module.scss"
import { NavbarLogo, NavbarMobileLogo } from '@/assets/images'
import Link from 'next/link'
import Image from 'next/image';
import { NavLinks } from '@/constants/navLinks';
import { Button, Form, Input, Modal, message } from 'antd';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { API } from '@/services/api';
import { SendContact } from '../Types';
import { MaskedInput } from 'antd-mask-input';
import '@ant-design/compatible';
import { AxiosError } from 'axios';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const { pathname } = useRouter();

    const { mutate } = useMutation({
        mutationFn: async (data: SendContact) => await API.postSendContact(data),
        onSuccess: () => {
            message.success("Malumotingiz muffaqiyatli yuborildi");
            form.resetFields();
        },
        onError: (error: AxiosError) => {
            message.error(error.message);
        },
    });

    const handleClickOpen = () => {
        setIsModalOpen((prev) => !prev);
    }

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values: SendContact) => {
        mutate(values);
        setIsModalVisible(false);
    };

    return (
        <div className={`${styles.navbar} container`}>
            <div className={styles.navbar__inner}>
                <div className={styles.navbar__logo}>
                    <Image src={NavbarLogo} alt="logo" />
                    <Image src={NavbarMobileLogo} alt="logo" />
                </div>

                <div className={styles.navbar__items}>
                    {
                        NavLinks.map((item, idx) => (
                            <Link
                                key={idx}
                                className={`${styles.navbar__item} ${pathname == item.link && styles.active}`}
                                href={item.link}
                            >
                                {item.key}
                            </Link>
                        ))
                    }
                </div>

                <button className={styles.navbar__btn} onClick={() => setIsModalVisible(true)}>Bog’lanish</button>

                <div className={`${styles.navbar__burger} ${isModalOpen ? styles.active : ""}`} onClick={handleClickOpen}>
                    <span className={styles.navbar__burger_item}></span>
                    <span className={styles.navbar__burger_item}></span>
                    <span className={styles.navbar__burger_item}></span>
                </div>
            </div>
            <div className={`${styles.navbar__modal} ${isModalOpen ? styles.active : ""}`}>
                {
                    NavLinks.map((item, idx) => (
                        <div className={styles.navbar__modal_item} key={idx}>
                            <Link
                                onClick={() => setIsModalOpen(false)}
                                href={item.link}
                            >
                                {item.key}
                            </Link>
                        </div>
                    ))
                }
            </div>
            {/* Modal */}
            <Modal
                title="Bog’lanish"
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                className="navbar__ant_modal"
            >
                <div className={styles.navbar__ant_modal_inner}>
                    <p className={styles.navbar__ant_modal_text}>
                        Ma’lumotlaringizni qoldiring va operatirim tez orada sizga aloqaga chiqadi
                    </p>

                    {/* Ant Design Form */}
                    <Form onFinish={onFinish} form={form} layout="vertical">
                        {/* Name Input */}
                        <Form.Item
                            name="fullname"
                            rules={[
                                { required: true, message: "Iltimos, ismingizni kiriting!" },
                            ]}
                        >
                            <Input className={styles.navbar__ant_modal_input} placeholder="Ismingizni kiriting" />
                        </Form.Item>

                        {/* Phone Number Input */}
                        <Form.Item
                            name="phone"
                            rules={[
                                { required: true, message: "Iltimos, telefon raqamingizni kiriting!" },
                                // { pattern: /^[0-9]+$/, message: "Faqat raqamlar kiriting!" },
                            ]}
                        >
                            <MaskedInput
                                className={styles.navbar__ant_modal_input}
                                mask={'+998 00 000 00 00'}
                                placeholder="Telefon raqamingizni kiriting"
                                required
                            />
                        </Form.Item>

                        {/* Submit Button */}
                        <Form.Item>
                            <Button className={styles.navbar__ant_modal_btn} type="primary" htmlType="submit" block>
                                Yuborish
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>
    )
}

export default Navbar
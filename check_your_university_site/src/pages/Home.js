const Home = () => {
    return (
        <main className="section">
            <div className="container">
                <ul className="content-list">
                    <li className="content-list__item">
                        <h1 className="title-1">
                            Основная статистика проекта
                        </h1>
                        <ul className="stat-list">
                            <li className="stat-list__item">
                                Обработано за месяц <em><strong>32.567</strong> </em> заявок.
                            </li>

                            <li className="stat-list__item">
                                Подано за месяц <em><strong>32.567</strong></em> заявок.
                            </li>
                        </ul>
                    </li>

                    <li className="content-list__item">
                        <h1 className="title-1">
                            Краткая информация о самом проекте
                        </h1>
                        <ul className="infproject-list">
                            <li className="infproject-list__item">
                                Данный проект был создан в качестве курсовой работы на 2 курсе ОП "Программная инженерия".
                            </li>

                            <li className="infproject-list__item">
                                Результатом нашей работы является функциональный продукт для университетов, который является сервиcным инструментом для удобной работы с подачей и обработкой заявок, связанных с неисправностями.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </main>
    );
}
 
export default Home;
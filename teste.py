from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Chrome()
driver.get("http://localhost:4200")  # Altere para sua URL real, se necessário

wait = WebDriverWait(driver, 10)

# Aguarda o carregamento dos cards
wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, "movie-card")))

# Coleta os 3 primeiros cards visíveis na tela
movie_cards = driver.find_elements(By.CLASS_NAME, "movie-card")[:10]

for index, movie_card in enumerate(movie_cards, start=1):
    try:
        title = movie_card.find_element(By.TAG_NAME, "h3").text

        # Scroll até o card
        driver.execute_script("arguments[0].scrollIntoView(true);", movie_card)
        time.sleep(0.5)

        # Clica no card
        movie_card.click()

        # Aguarda o popup aparecer
        popup = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, "popup-backdrop")))

        print(f"✅ [{index}] Filme aberto: {title}")

        # Espera 3 segundos com o popup aberto
        time.sleep(3)

        # Fecha o popup (clica fora ou no botão fechar)
        try:
            close_button = popup.find_element(By.TAG_NAME, "button")
            close_button.click()
        except:
            popup.click()

        # Aguarda o fechamento do popup
        wait.until(EC.invisibility_of_element_located((By.CLASS_NAME, "popup-backdrop")))

    except Exception as e:
        print(f"⚠️ Erro ao abrir filme {index}: {e}")
        continue

driver.quit()

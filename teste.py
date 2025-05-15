from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Inicializa o navegador
driver = webdriver.Chrome()
driver.get("http://localhost:4200")  # ou a URL onde sua aplicação Angular roda

wait = WebDriverWait(driver, 10)

# Espera até o primeiro movie-card estar visível
first_movie_card = wait.until(
    EC.element_to_be_clickable((By.CLASS_NAME, "movie-card"))
)

# Clica no primeiro filme
first_movie_card.click()

# Aguarda o popup aparecer
popup = wait.until(
    EC.visibility_of_element_located((By.CLASS_NAME, "popup-backdrop"))
)

# Valida se o popup realmente apareceu
if popup.is_displayed():
    print("✅ Popup exibido com sucesso ao clicar no filme.")
else:
    print("❌ Popup NÃO exibido.")

# Espera alguns segundos para visualizar
time.sleep(3)

# Fecha o navegador
driver.quit()

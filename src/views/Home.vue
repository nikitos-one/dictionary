<template>
  <form @submit.prevent="submitForm">

    <v-content>
      <v-row no-gutters class="nav-top">
        <v-col>
          <h1>Просмотр/редактирование документа</h1>
        </v-col>
        <v-col>
          <div class="d-flex justify-end">
            <c-button
                    color="#F2F4FD"
                    height="25px"
                    width="85px"
                    iconName="link.svg"
                    iconColor="#E5292F">
              Ссылка
            </c-button>
            <c-button
                    color="#F2F4FD"
                    height="25px"
                    width="85px"
                    iconName="parsing.svg"
                    iconColor="#2196F3">
              Разбор
            </c-button>
            <c-button
                    color="#F2F4FD"
                    height="25px"
                    width="85px"
                    iconName="sale.svg"
                    iconColor="#656565">
              Продажа
            </c-button>
            <c-button
                    color="#F2F4FD"
                    height="25px"
                    width="65px"
                    iconName="ret.svg"
                    iconColor="#3CAC20">
                RET
            </c-button>
            <c-button
                    color="#F2F4FD"
                    height="25px"
                    width="65px"
                    iconName="asb.svg"
                    iconColor="#656565">
              RET
            </c-button>
            <c-button
                    color="#F2F4FD"
                    height="25px"
                    width="65px"
                    iconName="asb.svg"
                    iconColor="#FFAA2C">
              АСБ
            </c-button>
            <c-button
                    color="#F2F4FD"
                    height="25px"
                    width="65px"
                    iconName="xml.svg"
                    iconColor="#b3439a"
                    style="margin-right: 0;">
              XML
            </c-button>
          </div>
        </v-col>
      </v-row>

      <v-row no-gutters class="nav-sub">
        <v-col>
          <div class="d-flex">
            <div>
              Заказ № <span>1234567</span>
            </div>
            <div>
              Кассир: <span>Иванов Иван Иванович</span>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <div class="section-title section-title--margin">Параметры документа</div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Тип бланка</div>
            <custom-select class="custom-select--first-line"
                           v-model="form.country"
                           placeholder="Выберите тип бланка"
                           :options="form.countryOptions"/>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Код брони | Валидатор</div>
            <custom-input v-model="form.inputTest" placeholder="Код брони"/>
            <custom-input placeholder="Валидатор" class="custom-input--next-inline"/>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Расчетный код | Номер</div>
            <custom-input placeholder="Р/код" class="flex-grow-0 flex-shrink-0" style="width: 70px"/>
            <custom-input placeholder="Номер" class="custom-input--next-inline"/>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Conjunction tickets</div>
            <custom-input placeholder="Р/код" class="flex-grow-0 flex-shrink-0" style="width: 70px"/>
            <custom-input placeholder="Номер" class="custom-input--next-inline"/>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Поставщик</div>
            <custom-input placeholder="Поставщик"/>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Референция кассира</div>
            <custom-input placeholder="Референция кассира"/>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Передаточная надпись</div>
            <custom-input placeholder="Передаточная надпись"/>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">ФИО пассажира</div>
            <custom-input placeholder="ФИО пассажира"/>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">ФИО пассажира (рус.)</div>
            <custom-input placeholder="ФИО пассажира (рус.)"/>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Документ, уд. личность</div>
            <custom-input placeholder="Номер документа"/>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Расчет тарифа</div>
            <custom-input placeholder="Расчет тарифа"/>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Код тура</div>
            <custom-input placeholder="Код тура"/>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Тариф за единицу | Вес</div>
            <custom-input placeholder="Тариф за ед."/>
            <custom-input placeholder="Вес" class="custom-input--next-inline"/>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Тип вагона</div>
            <custom-select placeholder="Тип вагона" :options="['1', '2', '3']"></custom-select>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Вид расписания</div>
            <custom-select placeholder="Вид расписания" :options="['1', '2', '3']"></custom-select>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Комментарии</div>
            <custom-input placeholder="Комментарии" value="Тест"/>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">RobotID | GDS</div>
            <custom-input placeholder="Robot ID"/>
            <custom-input placeholder="Reservation" class="custom-input--next-inline"/>
          </div>

        </v-col>
        <v-col>
          <div class="section-title section-title--margin">Параметры операции</div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Субагент | Пульт</div>
            <custom-select placeholder="Субагент" :options="['1', '2', '3']" class="custom-select--first-line"></custom-select>
            <custom-select placeholder="Пульт" :options="['1', '2', '3']" class="custom-select--first-line custom-select--next-inline"></custom-select>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Операция</div>
            <custom-select placeholder="Операция" :options="['1', '2', '3']"></custom-select>
          </div>


          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Дата операции (смена)</div>
            <custom-date-picker placeholder="Выберите дату" v-model="form.dateTest"></custom-date-picker>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Дата оказания услуги</div>
            <custom-date-picker placeholder="Выберите дату"></custom-date-picker>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Вид | Признак: свой/чужой</div>
            <custom-select placeholder="Вид" :options="['1', '2', '3']"></custom-select>
            <custom-select placeholder="Свой/чужой" :options="['1', '2', '3']" class="custom-select--next-inline"></custom-select>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Выдан в обмен на</div>
            <custom-select placeholder="Тип" :options="['1', '2', '3']" class="flex-grow-0 flex-shrink-0 text-center" style="width: 45px"></custom-select>
            <custom-input placeholder="" class="custom-input--next-inline"/>
            <custom-input placeholder="" class="custom-input--next-inline"/>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Промоутер</div>
            <custom-select placeholder="Промоутер" :options="['1', '2', '3']" value="3"></custom-select>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Оп бронирования</div>
            <custom-select placeholder="Фамилия И. О." :options="['1', '2', '3']"></custom-select>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label flex-grow-0 flex-shrink-0">Клиент</div>
            <custom-input placeholder="Физическое лицо" />
          </div>

          <div class="section-title">Дополнительно</div>

          <div class="custom-label custom-label--inline flex-grow-0 flex-shrink-0">Бронирование гостиниц</div>
          <div class="d-flex align-center">
            <div class="custom-label custom-label--small">Проживание</div>
            <div class="custom-label custom-label--small"></div>
            <div class="custom-label custom-label--small">Гостиница</div>
          </div>
          <div class="d-flex align-center">
            <custom-date-picker placeholder="Дата заезда" class="custom-date_picker--first-line"></custom-date-picker>
            <custom-date-picker placeholder="Дата выезда" class="custom-date_picker--first-line custom-date_picker--next-inline"></custom-date-picker>
            <custom-input placeholder="Гостиница" class="custom-input--first-line custom-input--next-inline"/>
            <custom-input placeholder="Город" class="custom-input--first-line custom-input--next-inline"/>
          </div>

          <div class="custom-label custom-label--inline flex-grow-0 flex-shrink-0">Дополнительная информация</div>
          <div class="d-flex align-center">
            <div class="custom-label custom-label--small">Customer</div>
            <div class="custom-label custom-label--small">Vessel</div>
          </div>
          <div class="d-flex align-center">
            <custom-input placeholder="Customer" class="custom-input--first-line"/>
            <custom-input placeholder="Vessel" class="custom-input--first-line custom-input--next-inline"/>
          </div>
          <div class="d-flex align-center">
            <div class="custom-label custom-label--small">Manager</div>
            <div class="custom-label custom-label--small">Purpose</div>
          </div>
          <div class="d-flex align-center">
            <custom-input placeholder="Manager" class="custom-input--first-line"/>
            <custom-input placeholder="Purpose" class="custom-input--first-line custom-input--next-inline"/>
          </div>

        </v-col>
        <v-col cols="auto" style="width: 37.5%;">
          <div class="section-title">Стоимость</div>

          <div class="d-flex align-center">
            <div class="custom-label custom-label--small">Статья</div>
            <div class="custom-label custom-label--small flex-grow-0 flex-shrink-0" style="width: 45px">Код</div>
            <div class="custom-label custom-label--small text-right">Сумма</div>
            <div class="custom-label custom-label--small flex-grow-0 flex-shrink-0" style="width: 55px">ФО</div>
            <div class="custom-label custom-label--small flex-grow-0 flex-shrink-0" style="width: 130px">НДС</div>
          </div>

          <custom-summa-field v-for="(item, index) in form.testSumm"
                              :item="item"
                              :index="index"
                              :key="item.id"
                              class="custom-summa-field"
                              :class="{ 'custom-summa-field--first-line': item.id == 0 }"
                              @add-item="addItem"
                              @remove-item="removeItem">
          </custom-summa-field>

          <div class="d-flex align-center">
            <div class="custom-label custom-label--small">По бланку</div>
            <div class="custom-label custom-label--small">Сборы АГ</div>
            <div class="custom-label custom-label--small">Итого</div>
            <div class="custom-label custom-label--small">Комиссия АСБ</div>
          </div>
          <div class="d-flex align-center">
            <custom-input placeholder="По бланку" class="custom-input--first-line"/>
            <custom-input placeholder="Сборы АГ" class="custom-input--first-line custom-input--next-inline"/>
            <custom-input placeholder="Итого" class="custom-input--first-line custom-input--next-inline"/>
            <custom-input placeholder="Комиссия АСБ" class="custom-input--first-line custom-input--next-inline"/>
          </div>

          <div class="d-flex align-center">
            <div class="custom-label custom-label--small">Факт. комиссия</div>
          </div>
          <div class="d-flex align-center" >
            <div style="width: 50px;">*</div>
            <custom-select class="custom-select--first-line flex-grow-0 flex-shrink-0"
                           style="width: 85px"
                           placeholder="Условие"
                           :options="['1', '2', '3']">
            </custom-select>
            <custom-input class="custom-input--first-line custom-input--next-inline"
                          placeholder="" />
            <custom-input class="custom-input--first-line custom-input--next-inline"
                          placeholder="" />
          </div>

          <div class="d-flex align-center">
            <div class="custom-label custom-label--small">Курс</div>
            <div class="custom-label custom-label--small"></div>
            <div class="custom-label custom-label--small">В валюте</div>
          </div>
          <div class="d-flex align-center" >
            <custom-input class="custom-input--first-line"
                          placeholder="" />
            <custom-select class="custom-select--first-line custom-select--next-inline flex-grow-0 flex-shrink-0"
                           style="width: 85px"
                           placeholder="RUB"
                           :options="['1', '2', '3']">
            </custom-select>
            <custom-select class="custom-select--first-line custom-select--next-inline flex-grow-0 flex-shrink-0"
                           style="width: 85px"
                           placeholder="АСБ"
                           :options="['1', '2', '3']">
            </custom-select>
            <custom-input class="custom-input--first-line custom-input--next-inline"
                          placeholder="" />
          </div>

          <div class="section-title">Оплата</div>

          <div class="d-flex align-center">
            <div class="custom-label custom-label--small flex-grow-0 flex-shrink-0" style="width: 50px">ФО</div>
            <div class="custom-label custom-label--small text-right">Сумма</div>
            <div class="custom-label custom-label--small flex-grow-0 flex-shrink-0" style="width: 70px">Документ</div>
            <div class="custom-label custom-label--small flex-grow-0 flex-shrink-0" style="width: 90px">Плательщик</div>
            <div class="custom-label custom-label--small">Кредит. орг-ции</div>
            <div class="custom-label custom-label--small flex-grow-0 flex-shrink-0" style="width: 50px"></div>
          </div>

          <custom-payment-field v-for="(item, index) in form.testPayment"
                              :item="item"
                              :index="index"
                              class="custom-payment-field"
                              :class="{ 'custom-payment-field--first-line': item.id == 0 }"
                              @add-payment-item="addPaymentItem">
          </custom-payment-field>

          <br/>
          <div class="d-flex align-center">
            <div class="custom-label custom-label--inline flex-grow-0 flex-shrink-0" style="width: 170px">Дата продажи | Валюта</div>
            <custom-date-picker placeholder="Дата продажи" class="custom-date_picker--first-line flex-grow-0 flex-shrink-0" style="width: 100px"></custom-date-picker>
            <custom-select class="custom-select--first-line custom-select--next-inline"
                           placeholder="RUB | Российский рубль"
                           :options="['1', '2', '3']">
            </custom-select>
          </div>
          <div class="d-flex align-center">
            <div class="custom-label custom-label--inline flex-grow-0 flex-shrink-0" style="width: 170px">Вид отложенного платежа</div>
            <custom-select class="custom-select"
                           placeholder="Вид отложенного платежа"
                           :options="['1', '2', '3']">
            </custom-select>
          </div>
          <div class="d-flex align-center">
            <div class="custom-label custom-label--inline flex-grow-0 flex-shrink-0" style="width: 170px">Дата оплаты | Кассир</div>
            <custom-date-picker placeholder="Дата оплаты" class="flex-grow-0 flex-shrink-0" style="width: 100px"></custom-date-picker>
            <custom-input class="custom-input--next-inline"
                          placeholder="Кассир" />
          </div>
          <div class="d-flex align-center">
            <div class="custom-label custom-label--inline flex-grow-0 flex-shrink-0" style="width: 170px">НДС</div>
            <custom-input class=""
                          placeholder="НДС" />
          </div>



        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>

          <div class="section-title">Сегменты</div>
          <ag-grid-vue :style="`width: 100%; height: 70px`"
                       class="ag-theme-balham"
                       :gridOptions="gridOptions"
                       :columnDefs="columnDefs"
                       :defaultColDef="defaultColDef"
                       :rowData="users"
                       suppressPropertyNamesCheck=true
                       suppressContextMenu=true
          />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="nav-bottom">
          <div class="d-flex justify-end">
            <button class="submit custom-button custom-button--1" type="submit" style="margin-right: 5px;">Сохранить</button>
            <button class="custom-button custom-button--2">Отмена</button>
          </div>
        </v-col>
      </v-row>
<!--      <button class="submit" type="submit">Сохранить</button>-->
    </v-content>
  </form>
</template>
<script>

import CustomInput from "../components/CustomInput";
import CustomSelect from "../components/CustomSelect";
import CustomDatePicker from "../components/CustomDatePicker";
import CustomSummaField from "../components/CustomSummaField";
import CustomPaymentField from "../components/CustomPaymentField";
import cButton from '../components/cButton'
import {AgGridVue} from 'ag-grid-vue';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
// import 'ag-grid-community/dist/styles/ag-theme-material.css';

export default {
  name: 'Home',
  components: {
    CustomSelect,
    CustomInput,
    CustomDatePicker,
    CustomSummaField,
    CustomPaymentField,
    cButton,
    AgGridVue
  },
  data() {
    return {
      form: {
        country: "",
        inputTest: '777',
        dateTest: '10.10.2020',
        testSumm: [
          {
            id: 0,
            st: '1',
            code: '12345',
            sum: '100 руб',
            fo: '1',
            nds: '50 руб'
          },
          {
            id: 1,
            st: '1',
            code: '12345',
            sum: '100 руб',
            fo: '1',
            nds: '50 руб'
          },
        ],
        testPayment: [
          {
            id: 0,
            fo: '1',
            sum: '500 руб',
            doc: '',
            payer: '',
            org: ''
          },
          {
            id: 1,
            fo: '2',
            sum: '300 руб',
            doc: '',
            payer: '',
            org: ''
          },
        ],
        countryOptions: [
          // "Argentina",
          // "United States of America",
          // "Germany",
          // "China"
        ]
      },
      users: [
        {
          f1: 'X',
          f2: 'BQS',
          f3: '0,00',
          f4: '0,00',
          f5: '300',
          f6: 'A',
          f7: '25.11.2020',
          f8: '07:40',
          f9: '25.11.2020',
          f10: '07:40',
          f11: 'Статус',
          f12: 'AECSW',
          f13: '25.11.2020',
          f14: '25.11.2020',
          f15: '15',
        }

      ]
    }
  },
  methods: {
    submitForm() {
      console.log(JSON.stringify(this.form));
      let JSON1 = {"countryOptions": ["Argentina", "United States of America", "Germany", "China", "777"]};
      this.form = Object.assign(this.form, JSON1);
    },
    addItem(targetItem, index) {

      targetItem.id++;
      console.log(index);
      console.log(targetItem);
      this.form.testSumm.forEach((item) => {
        console.log(targetItem.id);
        if (item.id >= targetItem.id) {
          item.id++;
        }
        // console.log(item.id);
      });
      console.log(targetItem);
      // Vue.set(this.form.testSumm, targetItem.id, targetItem);
      this.form.testSumm.splice(targetItem.id, 0, targetItem);
    },
    addPaymentItem(targetItem, index) {

      targetItem.id++;
      console.log(index);
      console.log(targetItem);
      this.form.testPayment.forEach((item) => {
        console.log(targetItem.id);
        if (item.id >= targetItem.id) {
          item.id++;
        }
        // console.log(item.id);
      });
      console.log(targetItem);
      // Vue.set(this.form.testSumm, targetItem.id, targetItem);
      this.form.testPayment.splice(targetItem.id, 0, targetItem);
    },
    removeItem() {

    },
    hidePopupMenu() {
      if (this.gridApi !== null) {
        this.gridApi.hidePopupMenu();
      }
    },
    autoSizeAll(skipHeader) {
      var allColumnIds = [];
      this.gridColumnApi.getAllColumns().forEach(function(column) {
        allColumnIds.push(column.colId);
      });
      this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
    },
  },
  beforeMount() {
    this.gridOptions = {}
    this.defaultColDef = {
      resizable: true,
      width: 100,
    }
    this.columnDefs = [
      {headerName: 'X/0', field: 'f1', width: 70},
      {headerName: 'От', field: 'f2'},
      {headerName: 'До', field: 'f3'},
      {headerName: 'П', field: 'f4'},
      {headerName: 'Рейс', field: 'f5'},
      {headerName: 'Класс', field: 'f6'},
      {headerName: 'Дата вылета', field: 'f7'},
      {headerName: 'Время вылета', field: 'f8'},
      {headerName: 'Дата прилета', field: 'f9'},
      {headerName: 'Время прилета', field: 'f10'},
      {headerName: 'Статус', field: 'f11'},
      {headerName: 'Вид тарифа', field: 'f12'},
      {headerName: 'Не действителен до', field: 'f13'},
      {headerName: 'Не действителен после', field: 'f14'},
      {headerName: 'Норма багажа', field: 'f15'},
      {headerName: 'Возврат', field: 'f16'},
    ]
  },
  mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
    this.hidePopupMenu();
    this.autoSizeAll();
  }
}
</script>

<style lang="sass">
  .v-content
    padding: 20px !important

  .col
    padding-left: 10px !important
    padding-right: 10px !important

  .nav-top
    padding: 10px 0

    h1
      font-family: Roboto
      font-style: normal
      font-weight: 500
      font-size: 19px
      line-height: 22px
      letter-spacing: 0.015em
      text-transform: uppercase
      color: #FFAA2C

  .nav-sub
    padding-bottom: 10px
    div
      font-family: Roboto
      font-style: normal
      font-weight: 500
      font-size: 13px
      line-height: 15px
      color: #ADB2E2
      &:first-of-type
        margin-right: 50px
      span
        font-weight: normal
        color: #656565

  .nav-bottom
    margin-top: 20px

  .section-title
    height: 30px
    background: #F2F4FD
    padding: 5px 10px
    font-family: Roboto
    font-style: normal
    font-weight: 500
    font-size: 14px
    line-height: 20px
    text-transform: uppercase
    margin: 5px 0
    &--margin
      margin-bottom: 20px

  .custom-label
    white-space: nowrap
    font-family: Roboto
    font-style: normal
    font-weight: normal
    font-size: 13px
    line-height: 20px
    height: 20px
    width: 170px
    color: #656565
    &--small
      line-height: 15px
      height: 15px
      font-size: 11px
      padding: 0 7px
      width: 100%

  .custom-input, .custom-select
    width: 100%

  .ag-theme-balham
    .ag-root
      border: 0
    .ag-header
      background-color: #fff
    .ag-header-row
      height: 23px
    .ag-header-cell
      height: 23px
      .ag-cell-label-container
        width: fit-content
      .ag-header-icon
        display: none
        width: 0px !important
      &:after
        border: 0
    .ag-header-group-cell
      &:after
        border: 0

  .custom-button
    display: block
    width: 92px
    height: 26px
    border: 0.875px solid #FFAA2C
    box-sizing: border-box
    border-radius: 4px
    font-family: Roboto
    font-style: normal
    font-weight: normal
    font-size: 13px
    line-height: 15px
    text-align: center
    &--1
      border-color: #3CAC20
      background: #3CAC20
      color: #fff
    &--2
      color: #FFAA2C



</style>

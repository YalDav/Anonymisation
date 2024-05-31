**Project Anonymisation**   
This project is in respect to GDPR rules in Europe in order to delete the personal information of clients, you can see the details of ths management rules here: https://www.cnil.fr/fr/reglement-europeen-protection-donnees

**<ins>folder: Kleanse_selection</ins>**  
The first step of this project is to identify the clients that should be anonymised in accordance to the rules
This process of identification is done in GCP Dataform, including all the sources that contain the required data of customers.  

  
**-Sources**  
This folder contains all the tables that we need to extract required data from.  

**-Assertion**  
The first set of assertions are placed in the entry point of the process in order to assure the reliability of input sources (freshness and completeness).  
The last assertion is placed before the final table to ensure the uniqeness of contact_id.  

**-Staging**  
Extract required column from the sources along with initial transformations to change the type of columns if necessary.  

**-Reporting**  
The main transformations in order to find the last activity date of each client, country of residence, and other required conditions to made the final decision if the client should be anony,ised or not.  
The final table in this process is loaded from selection_anonymisation.sqlx file.  
The calculations in this script create a result value for each unique client in the column of <ins>flag_to_be_anonymised</ins> to identify whether the client should be anonymised or not.


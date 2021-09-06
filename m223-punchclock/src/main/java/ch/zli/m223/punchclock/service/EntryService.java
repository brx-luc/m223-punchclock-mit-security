package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.Entry;
import ch.zli.m223.punchclock.repository.EntryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EntryService {
    private EntryRepository entryRepository;

    public EntryService(EntryRepository entryRepository) {
        this.entryRepository = entryRepository;
    }

    //Neuer Engtry wird erstellt
    public Entry createEntry(Entry entry) {
        return entryRepository.saveAndFlush(entry);
    }

    //Erstellte Entries werden aufgelistet
    public List<Entry> findAll() {
        return entryRepository.findAll();
    }

    public void deleteEntry(long id) { entryRepository.deleteById(id); }

    public Entry updateEntry(Entry entry) {
        return entryRepository.save(entry);
    }
}
